// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/**
 * @returns {void}
 */
toggleToast = () => {
  const toast = document.querySelector('auro-toast');
  if (!toast.hasAttribute('visible')) {
    toast.setAttribute("visible", true);
  }
};
