// Copyright (c) 2023 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable lit/binding-positions, lit/no-invalid-html, max-lines */
import { LitElement } from "lit";
import { html } from "lit/static-html.js";

import { AuroDependencyVersioning } from "@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs";
import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";
import { AuroButton } from "@aurodesignsystem/auro-button/class";
import { AuroIcon } from "@aurodesignsystem/auro-icon/class";

// Icons
import errorIcon from "@alaskaairux/icons/dist/icons/alert/error-stroke.mjs";
import infoIcon from "@alaskaairux/icons/dist/icons/alert/information-stroke.mjs";
import successIcon from "@alaskaairux/icons/dist/icons/interface/check-stroke.mjs";
import closeIcon from "@alaskaairux/icons/dist/icons/interface/x-lg.mjs";

import buttonVersion from "./buttonVersion.js";
import iconVersion from "./iconVersion.js";

import colorCss from "./styles/color.scss";
import styleCss from "./styles/style.scss";
import tokensCss from "./styles/tokens.scss";

const DEFAULT_TIME_TIL_FADE_OUT = 5000;
const FADE_OUT_DURATION = 300;

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * Shows a short, temporary message, such as a confirmation or an error.
 *
 * **Key capabilities**
 * - **Success and error styles**: Set `variant` to `success` or `error` to change the color and icon, or to `custom` to show your own icon.
 * - **Hides on its own**: The toast hides after five seconds, except error toasts, which stay open until someone closes them; use `timeTilHide` to change the time or `disableAutoHide` to keep any toast open.
 * - **Returns focus**: Set `trigger` or `triggerElement` to send focus back to the element that opened the toast when someone closes the toast with its close button.
 * - **Stacks with other toasts**: Wrap toasts in `auro-toaster` to stack them at the bottom of the screen.
 *
 * **Example**
 * ```html
 * <auro-toast visible>Your changes were saved.</auro-toast>
 * ```
 *
 * @summary A short, temporary message with success, error, and custom styles that can hide on its own.
 * @customElement auro-toast
 *
 * @slot - The message shown in the toast.
 * @slot customSvg - The icon to show with `variant="custom"`. Give a meaningful icon a description for screen readers.
 * @csspart type-icon - The icon at the start of the toast. Not rendered when `noIcon` is set.
 * @csspart close-button - The button that closes the toast.
 * @cssprop --ds-auro-toast-container-color - Background color of the toast.
 * @cssprop --ds-auro-toast-text-color - Color of the message text.
 * @cssprop --ds-auro-toast-icon-color - Color of the icon at the start of the toast.
 * @cssprop --ds-auro-toast-close-button-hover-container-color - Background color of the close button when a pointer is over it.
 * @event onToastClose - Deprecated: Use `toast-close` instead.
 * @event toast-close - Fires when the toast closes. The `detail` holds `visible` (always `false`) and the toast's `id`.
 */

// build the component class
export class AuroToast extends LitElement {
  constructor() {
    super();

    this._initializeDefaults();
  }

  _initializeDefaults() {
    /**
     * @private
     */
    this.closeDom = new DOMParser().parseFromString(closeIcon.svg, "text/html");

    /**
     * @private
     */
    this.closeSvg = this.closeDom.body.firstChild;
    this.closeSvg.setAttribute("slot", "svg");

    /**
     * @private
     */
    this.successDom = new DOMParser().parseFromString(
      successIcon.svg,
      "text/html",
    );

    /**
     * @private
     */
    this.successSvg = this.successDom.body.firstChild;

    this.successSvg.setAttribute("slot", "svg");

    /**
     * @private
     */
    this.errorDom = new DOMParser().parseFromString(errorIcon.svg, "text/html");

    /**
     * @private
     */
    this.errorSvg = this.errorDom.body.firstChild;
    this.errorSvg.setAttribute("slot", "svg");

    /**
     * @private
     */
    this.infoDom = new DOMParser().parseFromString(infoIcon.svg, "text/html");

    /**
     * @private
     */
    this.infoSvg = this.infoDom.body.firstChild;
    this.infoSvg.setAttribute("slot", "svg");

    const versioning = new AuroDependencyVersioning();

    /**
     * @private
     */
    this.buttonTag = versioning.generateTag(
      "auro-button",
      buttonVersion,
      AuroButton,
    );

    /**
     * @private
     */
    this.iconTag = versioning.generateTag("auro-icon", iconVersion, AuroIcon);

    /**
     * @private
     */
    this.runtimeUtils = new AuroLibraryRuntimeUtils();

    /**
     * @private
     */
    this.fadeOutTimer = undefined;

    /**
     * @private
     */
    this.closeTimer = undefined;

    /**
     * True when the toast is not inside an auro-toaster and must manage its
     * own live region announcement. Set once in connectedCallback.
     * Defaults to false, which assumes the toast is inside a toaster.
     * @private
     */
    this._isStandalone = false;
  }

  // This function is to define props used within the scope of this component
  // Be sure to review  https://lit.dev/docs/components/properties/
  // to understand how to use reflected attributes with your property settings.
  static get properties() {
    return {
      ...LitElement.properties,

      /**
       * Stops the toast from hiding on its own, even when `timeTilHide` is set. People can still close it with the close button.
       */
      disableAutoHide: {
        type: Boolean,
        reflect: true,
        attribute: "disableautohide",
      },

      /**
       * Hides the icon at the start of the toast, including a custom icon.
       */
      noIcon: {
        type: Boolean,
        reflect: true,
        attribute: "noicon",
      },

      /**
       * Sets how long, in milliseconds, the toast stays visible before it hides. Has no effect on error toasts or when `disableAutoHide` is set.
       * @default 5000
       */
      timeTilHide: {
        type: Number,
        reflect: true,
        attribute: "timetilhide",
      },

      /**
       * Sets the `id` of the element that opened the toast, so focus returns to it when someone closes the toast with its close button.
       * Takes precedence over `triggerElement` when both are set and an element has this `id`.
       */
      trigger: {
        type: String,
        reflect: true,
      },

      /**
       * Sets the element that opened the toast, so focus returns to it when someone closes the toast with its close button.
       * Use `trigger` instead to set it with an `id` in markup. `trigger` takes precedence when both are set.
       * @type {HTMLElement}
       */
      triggerElement: {
        type: Object,
        attribute: false,
      },

      /**
       * Sets the toast's color and icon. Use `success` to confirm that something worked, `error` to report a problem, and `custom` to show your own icon (a child with `slot="customSvg"`).
       * Error toasts don't hide on their own, and any other value shows an information icon.
       * @type {'error' | 'success' | 'custom'}
       */
      variant: {
        type: String,
        reflect: true,
      },

      /**
       * Shows the toast. The toast sets this back to `false` when it closes, whether it hides on its own or someone uses the close button.
       */
      visible: {
        type: Boolean,
        reflect: true,
      }
    };
  }

  static get styles() {
    return [styleCss, colorCss, tokensCss];
  }

  /**
   * Registers the element with the browser under a tag name.
   * @param {string} [name="auro-toast"] - The tag name to register the element under.
   *
   * @example
   * AuroToast.register("custom-toast") // Registers this element as <custom-toast>
   *
   */
  static register(name = "auro-toast") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroToast);
  }

  firstUpdated() {
    // Add the tag name as an attribute if it is different than the component name
    this.runtimeUtils.handleComponentTagRename(this, "auro-toast");
  }

  /**
   * Cancels any pending auto-hide/close timers when the toast leaves the DOM,
   * so a stale timer from a previous connection cannot fire after the node
   * has been removed or re-parented.
   * @private
   * @returns {void}
   */
  disconnectedCallback() {
    super.disconnectedCallback();
    clearTimeout(this.fadeOutTimer);
    clearTimeout(this.closeTimer);
  }

  /**
   * Returns focus to the trigger element when the toast is manually closed.
   * Not called on auto-dismiss, because moving focus then would
   * interrupt a screen reader user's current position in the page.
   * @private
   * @returns {void}
   */
  _returnFocus() {
    const target = (this.trigger ? document.getElementById(this.trigger) : null) ??
      this.triggerElement;

    if (target) {
      target.focus();
    }
  }

  /**
   * @private
   * @returns {void}
   */
  clickToClose() {
    this._returnFocus();
    clearTimeout(this.fadeOutTimer);
    clearTimeout(this.closeTimer);
    this.closeToast();
  }

  /**
   * @private
   * @returns {void}
   */
  fadeOutToast() {
    if (!this.disableAutoHide && this.visible) {
      const toastContainer = this.shadowRoot.querySelector(".toastContainer");
      if (toastContainer) {
        toastContainer.classList.add("hidden");
      }

      clearTimeout(this.closeTimer);
      this.closeTimer = setTimeout(() => {
        this.closeToast();
      }, FADE_OUT_DURATION);
    }
  }

  /**
   * @private
   * @returns {void}
   */
  closeToast() {
    // Guards against re-entry -- e.g. a close-button click on mobile widths
    // both closes the toast directly and bubbles to the host's own onclick
    // handler (see setOnClick()), which would otherwise schedule a second,
    // untracked close via fadeOutToast().
    if (!this.visible) {
      return;
    }

    clearTimeout(this.fadeOutTimer);
    clearTimeout(this.closeTimer);
    this.visible = false;

    /**
     * Deprecated: Use `toast-close` instead.
     * Fires when the toast closes.
     *
     * @deprecated Use `toast-close` instead.
     * @event onToastClose
     * @type {HTMLElement}
     */
    this.dispatchEvent(
      new CustomEvent("onToastClose", {
        bubbles: true,
        composed: true,
        detail: this, // unchanged for backwards compatibility; use `toast-close` for the new `{ visible }` shape
      }),
    );

    /**
     * Fires when the toast closes. The `detail` holds `visible` (always `false`) and the toast's `id`.
     *
     * @event toast-close
     * @type {{ visible: boolean, id: string }}
     */
    this.dispatchEvent(
      new CustomEvent("toast-close", {
        bubbles: true,
        composed: true,
        detail: { visible: false, id: this.id },
      }),
    );
  }

  /**
   * For mobile, set the onclick function so the toast can be dismissed if it is tapped on anywhere inside the toast.
   * Ignores clicks on the close button: clickToClose() already handles those, and re-running
   * fadeOutToast() for the same click caused a double close (see AB#1643472).
   * @private
   * @returns {void}
   */
  setOnClick() {
    const mobileBreakPoint = 767;
    if (window.innerWidth < mobileBreakPoint) {
      this.onclick = (event) => {
        const closeButton = this.shadowRoot?.querySelector('[part="close-button"]');
        if (closeButton && event.composedPath().includes(closeButton)) {
          return;
        }
        this.fadeOutToast();
      };
    }
  }

  /**
   * Determines which type icon to render based on the variant prop.
   * @private
   * @returns {HTMLElement} - The icon element to render.
   */
  getVariantIcon() {
    const VARIANT_ICONS = {
      success: this.successSvg,
      error: this.errorSvg,
      default: this.infoSvg,
    };

    return VARIANT_ICONS[this.variant] || VARIANT_ICONS.default;
  }

  connectedCallback() {
    super.connectedCallback();
    this.setOnClick();

    // A disconnect during fade-out (see disconnectedCallback) cancels the
    // pending close timer but leaves the "hidden" class on the container --
    // there is no pending close left to finish it. Reconnecting must restore
    // full visibility, otherwise the toast can get stuck rendered-but-hidden
    // while `visible` is still true (e.g. if disableAutoHide was toggled on
    // while detached, which prevents _scheduleAutoHide() below from ever
    // re-arming a close).
    this.shadowRoot?.querySelector(".toastContainer")?.classList.remove("hidden");

    // Re-arm auto-hide on reconnect (e.g. re-parenting the node elsewhere in
    // the DOM) -- updated() does not re-run just because connectedCallback()
    // fired again, since no reactive property changed as a result.
    this._scheduleAutoHide();

    // Dispatch a cancelable event so auro-toaster can signal it will handle
    // announcements. If nothing cancels the event the toast is standalone and
    // must register its own live region on the host element — before
    // any visibility change — so the AT has already observed it as a live
    // region by the time content is rendered into the shadow DOM.
    const event = new CustomEvent('toast-request-announce', {
      bubbles: true,
      cancelable: true,
      composed: true,
    });

    // NOTE — reverse logic:
    // dispatchEvent() returns TRUE when nobody called preventDefault(), which
    // means no auro-toaster was listening — the toast is standalone and must
    // own its live region. It returns FALSE when a toaster cancelled the event,
    // signalling that the toaster's aria-live region will handle announcements.
    const eventNotPrevented = this.dispatchEvent(event);

    // Secondary check: even if no toaster answered the event, the toast may
    // be inside another element that already owns a live region (e.g. a plain
    // div[aria-live="polite"]). Setting a role on the host in that case would
    // create a nested live region. aria-live="off" is intentionally excluded
    // — it disables live region behavior and is not an active announcer.
    this._isStandalone = eventNotPrevented && !this._hasAncestorLiveRegion();

    this._syncStandaloneRole();
  }

  /**
   * Sets or removes the live-region role on the host depending on whether
   * the toast is standalone. Extracted so connectedCallback and updated()
   * stay in sync without duplicating the logic.
   * @private
   * @returns {void}
   */
  _syncStandaloneRole() {
    if (this._isStandalone) {
      this.setAttribute('role', this.variant === 'error' ? 'alert' : 'status');
    } else {
      this.removeAttribute('role');
    }
  }

  /**
   * Walks the DOM ancestors (crossing shadow boundaries) looking for any
   * active live region: either an aria-live="polite" or "assertive" attribute,
   * or an implicit live region role (alert, status, log).
   * aria-live="off" is not considered active and is intentionally ignored.
   * @private
   * @returns {boolean}
   */
  _hasAncestorLiveRegion() {
    let node = this.parentElement;
    while (node) {
      if (
        ['polite', 'assertive'].includes(node.getAttribute?.('aria-live')) ||
        ['alert', 'status', 'log'].includes(node.getAttribute?.('role'))
      ) {
        return true;
      }
      // Traverse up, crossing shadow DOM boundaries if needed
      node = node.parentElement ?? node.getRootNode()?.host ?? null;
    }
    return false;
  }

  updated(changedProperties) {
    if (changedProperties.has("visible")) {
      this.handleSlotContent();

      // A toast element reused for a new message (e.g. a message queue
      // recycling instances) can still have a closeTimer pending from an
      // earlier close's fade-out -- nothing previously cleared it when
      // visible flips back to true, so it could fire ~300ms later and close
      // the freshly re-shown toast. Also restore visibility in case the
      // earlier fade-out had already applied the "hidden" class.
      if (this.visible) {
        clearTimeout(this.closeTimer);
        this.shadowRoot?.querySelector(".toastContainer")?.classList.remove("hidden");
      }
    }

    // Keep the standalone role in sync if variant changes after connection.
    if (changedProperties.has("variant")) {
      clearTimeout(this.fadeOutTimer);
      clearTimeout(this.closeTimer);

      // Cancelling a pending close mid-fade must also undo fadeOutToast()'s
      // visual state, otherwise the toast is left invisible (via the
      // "hidden" class) but still marked visible, with no close ever fired.
      this.shadowRoot?.querySelector(".toastContainer")?.classList.remove("hidden");

      this._syncStandaloneRole();
    }

    this._scheduleAutoHide();
  }

  /**
   * (Re-)schedules the auto-hide timer based on the current values of visible,
   * disableAutoHide, variant, and timeTilHide. Called from updated() on property
   * changes and from connectedCallback() to re-arm auto-hide after a reconnect
   * (for example, when the node is re-parented elsewhere in the DOM), since
   * updated() does not run again on reconnect alone.
   *
   * Restarts the full countdown on every reconnect rather than resuming
   * elapsed time. This is intentional (AB#1646998): "visible for N ms"
   * is scoped to a single connected mount, and connectedCallback() itself
   * re-arms on every reconnect, so a resume-elapsed-time model would need
   * its own persisted start time with no corresponding product ask.
   * @private
   * @returns {void}
   */
  _scheduleAutoHide() {
    // Unconditional so a pending timer never survives becoming ineligible
    // (e.g. disableAutoHide toggled on mid-countdown) -- correctness should
    // not depend on fadeOutToast()'s own guard re-checking eligibility.
    clearTimeout(this.fadeOutTimer);

    // do not auto dismiss for error toasts, if disableAutoHide is set, or
    // while disconnected -- updated() can still run after disconnect (Lit's
    // update cycle does not require an active connection), and arming a
    // timer here would let it fire off-DOM, ahead of connectedCallback's own
    // re-arm and hidden-class restoration on reconnect (AB#1646998).
    if (this.isConnected && this.visible && !this.disableAutoHide && this.variant !== "error") {
      this.fadeOutTimer = setTimeout(() => {
        this.fadeOutToast();
      }, this.timeTilHide || DEFAULT_TIME_TIL_FADE_OUT);
    }
  }

  /**
   * Mirrors any defined custom type svg into the correct place in the template.
   * @private
   * @returns {void}
   */
  handleSlotContent() {
    try {
      const customSvg = this.querySelector(`[slot="customSvg"]`);

      if (customSvg) {
        const iconSvg = customSvg.cloneNode(true);
        const typeIcon = this.shadowRoot.querySelector(".typeIcon");

        if (typeIcon) {
          iconSvg.setAttribute("slot", "svg");
          typeIcon.appendChild(iconSvg);
        }
      }
    } catch (error) {
      console.error("handleSlotContent", error); // eslint-disable-line no-console
    }
  }

  render() {
    return html`
      ${this.visible
        ? html`
        <div class="toastContainer">
          ${this.noIcon
            ? undefined
            : html`
            <${this.iconTag} customColor customSvg class="typeIcon body-default" part="type-icon">
              ${this.variant === "custom" ? undefined : html`${this.getVariantIcon()}`}
            </${this.iconTag}>
          `
          }
          <div class="message body-default"><slot></slot></div>
          <${this.buttonTag}
            variant="flat"
            shape="circle"
            size="xs"
            appearance=${this.variant !== "error" && this.variant !== "success" ? "inverse" : this.appearance}
            @click="${this.clickToClose}"
            part="close-button"
            class="closeButton">
            <${this.iconTag} customColor customSvg>
              ${this.closeSvg}
            </${this.iconTag}>
            <span slot="ariaLabel">Close this notification.</span>
          </${this.buttonTag}>
        </div>
      `
        : undefined
      }
    `;
  }
}
