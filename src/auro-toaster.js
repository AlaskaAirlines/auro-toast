// Copyright (c) 2023 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { html, LitElement } from "lit";
import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";
import styleCss from "./styles/style-toaster.scss";

export class AuroToaster extends LitElement {
  static get styles() {
    return [styleCss];
  }

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-toaster"] - The name of the element that you want to register to.
   *
   * @example
   * AuroToaster.register("custom-toaster") // this will register this element to <custom-toaster/>
   *
   */
  static register(name = "auro-toaster") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroToaster);
  }

  connectedCallback() {
    super.connectedCallback();
    this._assertiveResetTimer = undefined;
    this._announcedErrorToasts = new WeakSet();

    /**
     * @private
     */
    // Only react to visible attribute changes on error toasts.
     // Other mutations (polite toasts appearing, etc.) should not
    // override a timed assertive reset already in progress.
    this._observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        const target = mutation.target;
        const isErrorToast = target.getAttribute?.('variant') === 'error';
        const becameVisible = target.hasAttribute?.('visible');

        if (isErrorToast && becameVisible) {
          this._setAssertiveTemporarily();
        }
      }
    });

    this._observer.observe(this, {
      subtree: true,
      attributeFilter: ['visible'],
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._observer?.disconnect();
    clearTimeout(this._assertiveResetTimer);
  }

  /**
   * Temporarily sets the live region to assertive so the error toast
   * interrupts the screen reader, then resets to polite after 3 seconds.
   * This ensures subsequent polite toasts don't keep interrupting the user,
   * even if the error toast remains visible (errors are never auto-dismissed).
   * @private
   */
  _setAssertiveTemporarily() {
    const liveRegion = this.shadowRoot?.querySelector('[aria-live]');
    if (!liveRegion) return;

    clearTimeout(this._assertiveResetTimer);
    liveRegion.setAttribute('aria-live', 'assertive');

    this._assertiveResetTimer = setTimeout(() => {
      liveRegion.setAttribute('aria-live', 'polite');
    }, 3000);
  }

  render() {
    return html`
      <div class="toaster-wrapper" aria-live="polite" aria-atomic="false">
        <slot @slotchange="${this._onSlotChange}"></slot>
      </div>
    `;
  }

  /**
   * Handles slot changes — checks if a newly slotted error toast
   * is already visible at the time it is added to the toaster.
   * @private
   */
  _onSlotChange(e) {
    const newErrorToast = e.target.assignedElements()
      .find(el =>
        el.getAttribute('variant') === 'error' &&
        el.hasAttribute('visible') &&
        !this._announcedErrorToasts.has(el)
      );

    if (newErrorToast) {
      this._announcedErrorToasts.add(newErrorToast);
      this._setAssertiveTemporarily();
    }
  }
}
