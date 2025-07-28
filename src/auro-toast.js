// Copyright (c) 2023 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable lit/binding-positions, lit/no-invalid-html, max-lines */

// If using litElement base class
import { LitElement } from "lit";
import { html } from 'lit/static-html.js';

// Import touch detection lib
import styleCss from "./styles/style-css.js";
import colorCss from "./styles/color-css.js";
import tokensCss from "./styles/tokens-css.js";

import closeIcon from '@alaskaairux/icons/dist/icons/interface/x-lg.mjs';
import successIcon from '@alaskaairux/icons/dist/icons/interface/check-stroke.mjs';
import errorIcon from '@alaskaairux/icons/dist/icons/alert/error-stroke.mjs';
import infoIcon from '@alaskaairux/icons/dist/icons/alert/information-stroke.mjs';

import AuroLibraryRuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

import { AuroDependencyVersioning } from '@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs';

import { AuroButton } from '@aurodesignsystem/auro-button/src/auro-button.js';
import buttonVersion from './buttonVersion.js';

import { AuroIcon } from '@aurodesignsystem/auro-icon/src/auro-icon.js';
import iconVersion from './iconVersion.js';

const DEFAULT_TIME_TIL_FADE_OUT = 5000;
const FADE_OUT_DURATION = 300;

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-toast element provides users a way to display short, temporary messages.
 *
 * @attr {Boolean} visible - Sets state of toast to visible
 * @attr {String} variant - Component will render visually based on which variant value is set; currently supports `error`, `success`, `custom`
 * @attr {Boolean} noIcon - Removes icon from the toast UI
 * @attr {Boolean} disableAutoHide - Prevents the toast from auto-hiding on the default time.
 * @attr {Number} timeTilHide - Sets the time in milliseconds until the toast hides.
 * @csspart type-icon - Apply css to the toast type icon
 * @csspart close-button - Apply css to the toast close button
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
    this.runtimeUtils = new AuroLibraryRuntimeUtils();

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
      },
      disableAutoHide: {
        type: Boolean,
        reflect: true
      },
      timeTilHide: {
        type: Number,
        reflect: true
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
   * This will register this element with the browser.
   * @param {string} [name="auro-toast"] - The name of element that you want to register to.
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
    this.runtimeUtils.handleComponentTagRename(this, 'auro-toast');
  }

  /**
   * @private
   * @returns {void}
   */
  clickToClose() {
    this.closeToast();
    clearTimeout(this.fadeOutTimer);
  }

  /**
   * @private
   * @returns {void}
   */
  fadeOutToast() {
    if (!this.disableAutoHide) {
      const toastContainer = this.shadowRoot.querySelector('.toastContainer');
      if (toastContainer) {
        toastContainer.classList.add('hidden');
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

  /**
   * Determines which type icon to render based on the variant prop.
   * @private
   * @returns {HTMLElement} - The icon element to render.
   */
  getVariantIcon() {
    const VARIANT_ICONS = {
      success: this.successSvg,
      error: this.errorSvg,
      default: this.infoSvg
    };

    return VARIANT_ICONS[this.variant] || VARIANT_ICONS.default;
  }

  connectedCallback() {
    super.connectedCallback();
    this.setOnClick();
  }

  updated(changedProperties) {
    if (changedProperties.has('visible')) {
      this.handleSlotContent();
    }

    if (changedProperties.has('variant')) {
      clearTimeout(this.fadeOutTimer);
    }

    // do not auto dismiss for error toasts or if disableAutoHide is set
    if (this.visible && !this.disableAutoHide && this.variant !== 'error') {
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
        const typeIcon = this.shadowRoot.querySelector('.typeIcon');

        if (typeIcon) {
          iconSvg.setAttribute('slot', 'svg');
          typeIcon.appendChild(iconSvg);
        }
      }
    } catch (error) {
      console.error('handleSlotContent', error); // eslint-disable-line no-console
    }
  }

  render() {
    return this.visible ? html`
      <div aria-live="polite" class="toastContainer">
        ${this.noIcon ? undefined : html`
          <${this.iconTag} customColor customSvg class="typeIcon" part="type-icon">
            ${this.variant === 'custom' ? undefined : html`${this.getVariantIcon()}`}
          </${this.iconTag}>
        `}
        <div class="message body-default"><slot></slot></div>
        <${this.buttonTag}
          variant="flat"
          shape="circle"
          size="xs"
          ?onDark=${this.getAttribute('variant') !== 'error' && this.getAttribute('variant') !== 'success'}
          @click="${this.clickToClose}"
          part="close-button"
          class="closeButton">
          <${this.iconTag} customColor customSvg>
            ${this.closeSvg}
          </${this.iconTag}>
          <span class="util_displayHiddenVisually">Close</span>
        </${this.buttonTag}>
      </div>
    ` : undefined;
  }
}
