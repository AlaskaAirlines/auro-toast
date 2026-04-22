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

  constructor() {
    super();
    // Initialised in the constructor so they survive disconnect/reconnect.
    // If these were in connectedCallback, a reconnected toaster would forget
    // which error toasts it had already announced and could re-announce them.
    this._assertiveResetTimer = undefined;
    this._announcedErrorToasts = new WeakSet();

    // Cancel the standalone live region request from any child toast — the
    // toaster's own aria-live region handles all announcements.
    // Calling preventDefault() causes dispatchEvent() on the toast to return
    // false, which the toast reads as "a toaster is present — do not set a
    // standalone live region role on the host element."
    this._onToastRequestAnnounce = (e) => e.preventDefault();
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
    this.addEventListener('toast-request-announce', this._onToastRequestAnnounce);

    /**
     * @private
     *
     * Observes toast attribute changes to determine when we should temporarily
     * switch the live region from "polite" → "assertive".
     *
     * Supported trigger paths:
     * 1. Normal path:
     *    - A toast becomes visible
     *    - AND it is already an error toast
     * 2. Defensive fallback (unsupported but possible misuse):
     *    - A visible toast has its variant changed to "error"
     *
     * Note:
     * Toasts are not intended to mutate while visible. This fallback exists
     * only to preserve accessibility behavior if that contract is violated.
     */
    this._observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        const target = mutation.target;

        // Only react to auro-toast elements (including versioned tags like
        // auro-toast_1_2_3). Explicitly ignore auro-toaster itself.
        if (!/^auro-toast(_|$)/u.test(target.localName ?? '')) continue;

        const isVisible = target.hasAttribute?.('visible');
        const isError = target.getAttribute?.('variant') === 'error';

        // ---------------------------------------------------------------------
        // Case 1: supported behavior
        // A toast becomes visible AND is already an error toast
        // ---------------------------------------------------------------------
        const becameVisible =
          mutation.attributeName === 'visible' &&
          isVisible &&
          isError;

        // ---------------------------------------------------------------------
        // Case 2: defensive fallback
        // A toast is already visible and its variant is changed to "error"
        // (unsupported usage pattern, but we handle it safely for a11y)
        // ---------------------------------------------------------------------
        const becameErrorWhileVisible =
          mutation.attributeName === 'variant' &&
          mutation.oldValue !== 'error' &&
          isVisible &&
          isError;

        if (becameVisible || becameErrorWhileVisible) {
          this._setAssertiveTemporarily();
        }
      }
    });

    this._observer.observe(this, {
      subtree: true,

      // REQUIRED: without this, attribute changes will not trigger the observer
      attributes: true,

      // We only care about these two attributes for performance and clarity
      attributeFilter: ['visible', 'variant'],

      // REQUIRED for detecting transitions (e.g. non-error → error)
      attributeOldValue: true,
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._observer?.disconnect();
    clearTimeout(this._assertiveResetTimer);
    this.removeEventListener('toast-request-announce', this._onToastRequestAnnounce);

    // Reset the live region to polite so a reconnected toaster does not
    // inherit a stale assertive state left behind by a cleared timer.
    const liveRegion = this.shadowRoot?.querySelector('[aria-live]');
    if (liveRegion) {
      liveRegion.setAttribute('aria-live', 'polite');
    }
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
    const newErrorToast = e.target.assignedElements({ flatten: true })
      .find(el =>
        /^auro-toast(_|$)/u.test(el.localName ?? '') &&
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
