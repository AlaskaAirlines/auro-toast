/* eslint-disable jsdoc/require-jsdoc */

export function initVisibleExample() {
  const btn = document.querySelector('#visibleToastBtn');
  const toast = document.querySelector('#visibleToast');

  btn.addEventListener('click', () => {
    if (!toast.hasAttribute('visible')) {
      toast.setAttribute('visible', true);
    }
  });
}
