// Copyright (c) 2023 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If using litElement base class
import { LitElement, html } from "lit";

// Import touch detection lib
import styleCss from "./style-css.js";
import closeIcon from '@alaskaairux/icons/dist/icons/interface/x-lg_es6.js';
import information from '@alaskaairux/icons/dist/icons/alert/information-stroke_es6.js';
import error from '@alaskaairux/icons/dist/icons/alert/error_es6.js';
import success from '@alaskaairux/icons/dist/icons/interface/check-stroke_es6.js';

const TIME_TIL_FADE_OUT = 5000;
const FADE_OUT_DURATION = 300;

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-toast element provides users a way to ... (it would be great if you fill this out).
 *
 * @attr {Boolean} visible - Sets state of toast to visible
 * @attr {String} variant - Component will render visually based on which variant value is set; currently supports `error`, `success`
 * @attr {Boolean} noIcon - Removes icon from the toast UI
 * @fires onToastClose - Notifies that the toast has been closed
 */

// build the component class
export class AuroToast extends LitElement {
  constructor() {
    super();

    /**
     * @private
     */
    this.dom = new DOMParser().parseFromString(closeIcon.svg, 'text/html');

    /**
     * @private
     */
    this.svg = this.dom.body.firstChild;

    /**
     * @private
     */
    this.fadeOutTimer = undefined;
  }

  // This function is to define props used within the scope of this component
  // Be sure to review  https://lit.dev/docs/components/properties/
  // to understand how to use reflected attributes with your property settings.
  static get properties() {
    return {
      ...super.properties,
      visible: {
        type: Boolean,
        reflect: true
      },
      variant: {
        type: String,
        reflect: true
      },
      noIcon: {
        type: Boolean
      }
    };
  }

  static get styles() {
    return [styleCss];
  }

  /**
   * @private
   * @param {string} svgContent - The imported svg icon.
   * @returns {string} - The html template for the icon.
   */
  generateIconHtml(svgContent) {
    const dom = new DOMParser().parseFromString(svgContent, 'text/html'),
      svg = dom.body.firstChild;

    return this.noIcon
      ? html``
      : html`<div class="icon">${svg}</div>`;
  }

  /**
   * @private
   * @returns {void}
   */
  handleOnClose() {
    this.fadeOutToast();
    clearTimeout(this.fadeOutTimer);
  }

  /**
   * @private
   * @returns {void}
   */
  fadeOutToast() {
    const toastContainer = this.shadowRoot.querySelector('#toastContainer');
    toastContainer.className = 'hidden';

    setTimeout(() => {
      this.closeToast();
    }, FADE_OUT_DURATION);
  }

  /**
   * @private
   * @returns {void}
   */
  closeToast() {
    clearTimeout(this.fadeOutTimer);
    this.visible = false;
    this.dispatchEvent(new CustomEvent('onToastClose', {
      bubbles: true,
      composed: true,
      detail: this
    }));
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

  connectedCallback() {
    super.connectedCallback();
    this.setOnClick();
  }

  updated(changedProperties) {
    if (changedProperties.has('variant')) {
      clearTimeout(this.fadeOutTimer);
    }
    // do not auto dismiss for error toasts
    if (this.visible && this.variant !== 'error') {
      this.fadeOutTimer = setTimeout(() => {
        this.fadeOutToast();
      }, TIME_TIL_FADE_OUT);
    }
  }

  render() {
    let iconHtml = html``;

    switch (this.variant) {
      case undefined:
      case null:
        // default toast uses information icon
        iconHtml = this.generateIconHtml(information.svg);
        break;
      case "error":
        iconHtml = this.generateIconHtml(error.svg);
        break;
      case "success":
        iconHtml = this.generateIconHtml(success.svg);
        break;
      default:
        break;
    }

    return this.visible ? html`<div id="toastContainer">
    ${iconHtml}
      <div class="message"><slot></slot></div>
      <button class="closeButton" aria-label="closeToast" @click="${this.handleOnClose}">
        ${this.svg}
      </button>
  </div>`
      : undefined;
  }
}

// default internal definition
if (!customElements.get("auro-toast")) {
  customElements.define("auro-toast", AuroToast);
}
