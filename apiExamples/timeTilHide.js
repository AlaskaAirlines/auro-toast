/* eslint-disable jsdoc/require-jsdoc */

export function initTimeTilHideExample() {
  const btn = document.querySelector("#timeTilHideToastBtn");
  const toast = document.querySelector("#timeTilHideToast");

  btn.addEventListener("click", () => {
    if (!toast.hasAttribute("visible")) {
      toast.setAttribute("visible", true);
    }
  });
}
