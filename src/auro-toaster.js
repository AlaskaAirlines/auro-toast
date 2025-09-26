// Copyright (c) 2023 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If using litElement base class
import { LitElement, html } from "lit";
import styleCss from "./styles/style-toaster-css.js";

import AuroLibraryRuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

export class AuroToaster extends LitElement {

  static get styles() {
    return [styleCss];
  }

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-toaster"] - The name of element that you want to register to.
   *
   * @example
   * AuroToaster.register("custom-toast") // this will register this element to <custom-toast/>
   *
   */
  static register(name = "auro-toaster") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroToaster);
  }

  render() {
    return html`<slot></slot>`;
  }
}
