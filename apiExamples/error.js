/* eslint-disable jsdoc/require-jsdoc */

export function initErrorExample() {
  const btn = document.querySelector("#errorToastBtn");
  const toast = document.querySelector("#errorToast");

  btn.addEventListener("click", () => {
    if (!toast.hasAttribute("visible")) {
      toast.setAttribute("visible", true);
    }
  });

  const btnTwo = document.querySelector("#errorToast-noIconBtn");
  const toastTwo = document.querySelector("#errorToast-noIcon");

  btnTwo.addEventListener("click", () => {
    if (!toastTwo.hasAttribute("visible")) {
      toastTwo.setAttribute("visible", true);
    }
  });
}
