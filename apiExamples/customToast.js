/* eslint-disable jsdoc/require-jsdoc */

export function initCustomExample() {
  const btn = document.querySelector('#customizedToastBtn');
  const toast = document.querySelector('#customizedToast');

  btn.addEventListener('click', () => {
    if (!toast.hasAttribute('visible')) {
      toast.setAttribute('visible', true);
    }
  });
}
