/* eslint-disable jsdoc/require-jsdoc */

export function initCustomExample() {
  const btn = document.querySelector("#customToastBtn");
  const toast = document.querySelector("#customToast");

  btn.addEventListener("click", () => {
    if (!toast.hasAttribute("visible")) {
      toast.setAttribute("visible", true);
    }
  });
}
