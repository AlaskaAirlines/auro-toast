// Copyright (c) 2023 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable lit/binding-positions, lit/no-invalid-html */

// If using litElement base class
import { LitElement } from "lit";
import { html } from 'lit/static-html.js';

// Import touch detection lib
import styleCss from "./style-css.js";
import colorCss from "./color-css.js";
import tokensCss from "./tokens-css.js";


import { AuroDependencyVersioning } from '@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs';

import { AuroButton } from '@aurodesignsystem/auro-button/src/auro-button.js';
import buttonVersion from './buttonVersion';

import { AuroIcon } from '@aurodesignsystem/auro-icon/src/auro-icon.js';
import iconVersion from './iconVersion';

const TIME_TIL_FADE_OUT = 5000;
const FADE_OUT_DURATION = 300;

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-toast element provides users a way to display short, temporary messages.
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


    const versioning = new AuroDependencyVersioning();

    /**
     * @private
     */
    this.buttonTag = versioning.generateTag('auro-button', buttonVersion, AuroButton);

    /**
     * @private
     */
    this.iconTag = versioning.generateTag('auro-icon', iconVersion, AuroIcon);

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
    return [
      styleCss,
      colorCss,
      tokensCss
    ];
  }

  /**
   * @private
   * @param {string} category - The category of the icon.
   * @param {string} name - The name of the icon.
   * @returns {string} - The html template for the icon.
   */
  generateIconHtml(category, name) {
    return this.noIcon
      ? html``
      : html`
        <${this.iconTag} 
          ?onDark="${!this.variant}" 
          ?error="${this.getAttribute('variant') === 'error'}" 
          ?success="${this.getAttribute('variant') === 'success'}" 
          class="icon" 
          customSize 
          category="${category}" 
          name="${name}">
        </${this.iconTag}>
      `;
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
    const toastContainer = this.shadowRoot.querySelector('.toastContainer');
    toastContainer.classList.add('hidden');

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

    /**
     * Emits closed toast event.
     *
     * @event onToastClose
     * @type {object}
     * @property {boolean} false - Sets visibility value for the toast element.
     */
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
        iconHtml = this.generateIconHtml('alert', 'information-stroke');
        break;
      case "error":
        iconHtml = this.generateIconHtml('alert', 'error-stroke');
        break;
      case "success":
        iconHtml = this.generateIconHtml('interface', 'check-stroke');
        break;
      default:
        break;
    }

    return this.visible ? html`<div aria-live="polite" class="toastContainer">
      ${iconHtml}
      <div class="message"><slot></slot></div>
        <${this.buttonTag} class="closeButton" variant="flat" ?onDark="${!this.variant}" @click="${this.handleOnClose}">
          <${this.iconTag} class="closeButtonIcon" customSize customColor category="interface" name="x-lg"></${this.iconTag}>
        </${this.buttonTag}>
      </div>`
      : undefined;
  }
}

// default internal definition
if (!customElements.get("auro-toast")) {
  customElements.define("auro-toast", AuroToast);
}
