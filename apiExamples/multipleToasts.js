/* eslint-disable jsdoc/require-jsdoc */

export function initMultipleToastsExample() {
  const btn = document.querySelector("#multiToastBtn-default");
  const toast = document.querySelector("#multiToast-default");

  btn.addEventListener("click", () => {
    if (!toast.hasAttribute("visible")) {
      toast.setAttribute("visible", true);
    }
  });

  const btnTwo = document.querySelector("#multiToastBtn-error");
  const toastTwo = document.querySelector("#multiToast-error");

  btnTwo.addEventListener("click", () => {
    if (!toastTwo.hasAttribute("visible")) {
      toastTwo.setAttribute("visible", true);
    }
  });

  const btnThree = document.querySelector("#multiToastBtn-success");
  const toastThree = document.querySelector("#multiToast-success");

  btnThree.addEventListener("click", () => {
    if (!toastThree.hasAttribute("visible")) {
      toastThree.setAttribute("visible", true);
    }
  });
}
