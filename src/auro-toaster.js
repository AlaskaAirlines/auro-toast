// Copyright (c) 2023 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If using litElement base class
import { LitElement, html } from "lit";
import styleCss from "./styles/style-toaster.scss";

export default class AuroToaster extends LitElement {

  static get styles() {
    return [styleCss];
  }

  render() {
    return html`<slot></slot>`;
  }
}
