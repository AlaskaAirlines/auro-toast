// Copyright (c) 2023 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If using litElement base class
import { LitElement, html } from "lit";

// Import touch detection lib
import styleCss from "./style-css.js";
import closeIcon from '@alaskaairux/icons/dist/icons/interface/x-lg_es6.js';

const TIME_TIL_FADE_OUT = 5000;
const FADE_OUT_DURATION = 300;

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-toast element provides users a way to ... (it would be great if you fill this out).
 *
 * @attr {Boolean} fixed - Uses fixed pixel values for element shape
 * @attr {Boolean} visible - Sets state of toast to visible
 * @attr {String} variant - Component will render visually based on which variant value is set; currently supports `error`, `success`
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
      }
    };
  }

  static get styles() {
    return [styleCss];
  }

  /**
   * @private
   * @returns {void}
   */
  handleOnClose() {
    this.visible = false;
    clearTimeout(this.fadeOutTimer);
  }

  /**
   * @private
   * @returns {void}
   */
  fadeOutToast() {
    const toastContainer = this.shadowRoot.querySelector('#toastContainer');
    toastContainer.className = 'hidden';

    // Wait until fade out completes to set visible to false
    setTimeout(() => {
      this.visible = false;
    }, FADE_OUT_DURATION);
  }

  updated() {
    if (this.visible) {
      this.fadeOutTimer = setTimeout(() => {
        this.fadeOutToast();
      }, TIME_TIL_FADE_OUT);
    }
  }

  render() {
    return this.visible
      ? html`
      <div id="toastContainer">
        <slot></slot>
        <button class="toastButton" @click="${this.handleOnClose}">
          ${this.svg}
        </button>
      </div>
      `
      : undefined;
  }
}

// default internal definition
if (!customElements.get("auro-toast")) {
  customElements.define("auro-toast", AuroToast);
}
