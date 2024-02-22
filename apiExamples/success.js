/* eslint-disable jsdoc/require-jsdoc */

export function initSuccessExample() {
  const btn = document.querySelector('#successToastBtn');
  const toast = document.querySelector('#successToast');

  btn.addEventListener('click', () => {
    if (!toast.hasAttribute('visible')) {
      toast.setAttribute('visible', true);
    }
  });

  const btnTwo = document.querySelector('#successToast-noIconBtn');
  const toastTwo = document.querySelector('#successToast-noIcon');

  btnTwo.addEventListener('click', () => {
    if (!toastTwo.hasAttribute('visible')) {
      toastTwo.setAttribute('visible', true);
    }
  });
}
