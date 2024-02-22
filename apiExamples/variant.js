/* eslint-disable jsdoc/require-jsdoc */

export function initVariantToastsExample() {
  const btn = document.querySelector('#defaultVariantBtn');
  const toast = document.querySelector('#defaultVariant');

  btn.addEventListener('click', () => {
    if (!toast.hasAttribute('visible')) {
      toast.setAttribute('visible', true);
    }
  });

  const btnTwo = document.querySelector('#errorVariantBtn');
  const toastTwo = document.querySelector('#errorVariant');

  btnTwo.addEventListener('click', () => {
    if (!toastTwo.hasAttribute('visible')) {
      toastTwo.setAttribute('visible', true);
    }
  });

  const btnThree = document.querySelector('#successVariantBtn');
  const toastThree = document.querySelector('#successVariant');

  btnThree.addEventListener('click', () => {
    if (!toastThree.hasAttribute('visible')) {
      toastThree.setAttribute('visible', true);
    }
  });
}
