/* eslint-disable jsdoc/require-jsdoc */

export function initBasicExample() {
  const btn = document.querySelector('#basicToastBtn');
  const toast = document.querySelector('#basicToast');

  btn.addEventListener('click', () => {
    if (!toast.hasAttribute('visible')) {
      toast.setAttribute('visible', true);
    }
  });

  const btnTwo = document.querySelector('#basicToast-noIconBtn');
  const toastTwo = document.querySelector('#basicToast-noIcon');

  btnTwo.addEventListener('click', () => {
    if (!toastTwo.hasAttribute('visible')) {
      toastTwo.setAttribute('visible', true);
    }
  });
}
