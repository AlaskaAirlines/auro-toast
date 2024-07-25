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

import closeIcon from '@alaskaairux/icons/dist/icons/interface/x-lg.mjs';
import successIcon from '@alaskaairux/icons/dist/icons/interface/check-stroke.mjs';
import errorIcon from '@alaskaairux/icons/dist/icons/alert/error-stroke.mjs';
import infoIcon from '@alaskaairux/icons/dist/icons/alert/information-stroke.mjs';

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

    /**
     * @private
     */
    this.closeDom = new DOMParser().parseFromString(closeIcon.svg, 'text/html');

    /**
     * @private
     */
    this.closeSvg = this.closeDom.body.firstChild;
    this.closeSvg.setAttribute('slot', 'svg');

    /**
     * @private
     */
    this.successDom = new DOMParser().parseFromString(successIcon.svg, 'text/html');

    /**
     * @private
     */
    this.successSvg = this.successDom.body.firstChild;
    this.successSvg.setAttribute('slot', 'svg');

    /**
     * @private
     */
    this.errorDom = new DOMParser().parseFromString(errorIcon.svg, 'text/html');

    /**
     * @private
     */
    this.errorSvg = this.errorDom.body.firstChild;
    this.errorSvg.setAttribute('slot', 'svg');

    /**
     * @private
     */
    this.infoDom = new DOMParser().parseFromString(infoIcon.svg, 'text/html');

    /**
     * @private
     */
    this.infoSvg = this.infoDom.body.firstChild;
    this.infoSvg.setAttribute('slot', 'svg');

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
    return this.visible ? html`
      <div aria-live="polite" class="toastContainer">
        ${this.noIcon ? undefined : html`
          <${this.iconTag} customSize customColor customSvg class="typeIcon">
            ${this.variant === 'success' ? this.successSvg : undefined}
            ${this.variant === 'error' ? this.errorSvg : undefined}
            ${this.variant !== 'success' && this.variant !== 'error' ? this.infoSvg : undefined}
          </${this.iconTag}>
        `}
        <div class="message"><slot></slot></div>
        <${this.buttonTag}
          variant="flat"
          ?onDark=${this.getAttribute('variant') !== 'error' && this.getAttribute('variant') !== 'success'}
          @click="${this.handleOnClose}" part="close-button">
          <${this.iconTag} customSize customColor customSvg>
            ${this.closeSvg}
          </${this.iconTag}>
          <span class="util_displayHiddenVisually">Close</span>
        </${this.buttonTag}>
      </div>
    ` : undefined;
  }
}

// default internal definition
if (!customElements.get("auro-toast")) {
  customElements.define("auro-toast", AuroToast);
}
