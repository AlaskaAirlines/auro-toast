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
 * The `auro-toast` element provides users a way to display short, temporary messages.
 * @customElement auro-toast
 *
 * @csspart type-icon - Apply css to the toast type icon
 * @csspart close-button - Apply css to the toast close button
 * @fires onToastClose - Notifies that the toast has been closed
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
     * True when the toast is not inside an auro-toaster and must manage its
     * own live region announcement. Set once in connectedCallback.
     * Default -- assumes toast is inside toaster.
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
       * Prevents the toast from auto-hiding on the default time.
       */
      disableAutoHide: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Removes icon from the toast UI.
       */
      noIcon: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Sets the time in milliseconds until the toast hides.
       */
      timeTilHide: {
        type: Number,
        reflect: true,
      },

      /**
       * The id of the element that triggered the toast.
       * When the toast is manually closed, focus will return to this element.
       * Takes precedence over the triggerElement property if both are set.
       */
      trigger: {
        type: String,
        reflect: true,
      },

      /**
       * A direct reference to the element that triggered the toast.
       * When the toast is manually closed, focus will return to this element.
       * Use the trigger attribute instead if you prefer a declarative approach.
       * @type {HTMLElement}
       */
      triggerElement: {
        type: Object,
        attribute: false,
      },

      /**
       * Component will render visually based on which variant value is set.
       * @type {'error' | 'success' | 'custom'}
       */
      variant: {
        type: String,
        reflect: true,
      },

      /**
       * Sets state of toast to visible
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
   * This will register this element with the browser.
   * @param {string} [name="auro-toast"] - The name of the element that you want to register.
   *
   * @example
   * AuroToast.register("custom-toast") // this will register this element to <custom-toast/>
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
   * Returns focus to the trigger element when the toast is manually closed.
   * Not called on auto-dismiss — moving focus during auto-dismiss would
   * interrupt the AT user's current position in the page.
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
    this.closeToast();
    clearTimeout(this.fadeOutTimer);
  }

  /**
   * @private
   * @returns {void}
   */
  fadeOutToast() {
    if (!this.disableAutoHide) {
      const toastContainer = this.shadowRoot.querySelector(".toastContainer");
      if (toastContainer) {
        toastContainer.classList.add("hidden");
      }

      setTimeout(() => {
        this.closeToast();
      }, FADE_OUT_DURATION);
    }
  }

  /**
   * @private
   * @returns {void}
   */
  closeToast() {
    clearTimeout(this.fadeOutTimer);
    this.visible = false;

    /**
     * Emits closed toast event.
     *
     * @event onToastClose
     * @type {object}
     * @property {boolean} false - Sets visibility value for the toast element.
     */
    this.dispatchEvent(
      new CustomEvent("onToastClose", {
        bubbles: true,
        composed: true,
        detail: this,
      }),
    );
  }

  /**
   * For mobile, set the onclick function so the toast can be dismissed if it is tapped on anywhere inside the toast.
   * @private
   * @returns {void}
   */
  setOnClick() {
    const mobileBreakPoint = 767;
    if (window.innerWidth < mobileBreakPoint) {
      this.onclick = () => {
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
   * active live region — either an aria-live="polite/assertive" attribute or
   * an implicit live region role (alert, status, log).
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
    }

    // Keep the standalone role in sync if variant changes after connection.
    if (changedProperties.has("variant")) {
      clearTimeout(this.fadeOutTimer);
      this._syncStandaloneRole();
    }

    // do not auto dismiss for error toasts or if disableAutoHide is set
    if (this.visible && !this.disableAutoHide && this.variant !== "error") {
      clearTimeout(this.fadeOutTimer);
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
      ${
        this.visible
          ? html`
        <div class="toastContainer">
          ${
            this.noIcon
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
