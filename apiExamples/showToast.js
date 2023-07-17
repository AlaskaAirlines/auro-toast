// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

export function showToast(toastID) {
  const toast = document.querySelector(toastID);

  if (!toast.hasAttribute('visible')) {
    toast.setAttribute('visible', true);
  }
};
