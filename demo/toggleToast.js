// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/**
 * @param {string} elName ID for targeted element
 * @returns {dom} attribute setting
 */
toggleToast = (elName) => {
    let toast = document.querySelector(elName);
    if (!toast.hasAttribute('visible')) {
      toast.setAttribute("visible", true)
    }
  }