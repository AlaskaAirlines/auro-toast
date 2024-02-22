/* eslint-disable jsdoc/require-jsdoc */

export function initNoIconExample() {
  const btn = document.querySelector('#noIconBtn');
  const toast = document.querySelector('#noIcon');

  btn.addEventListener('click', () => {
    if (!toast.hasAttribute('visible')) {
      toast.setAttribute('visible', true);
    }
  });
}
