/* eslint-disable jsdoc/require-jsdoc */

export function initDisableAutoHideExample() {
  const btn = document.querySelector("#disableHideToastBtn");
  const toast = document.querySelector("#disableHideToast");

  btn.addEventListener("click", () => {
    if (!toast.hasAttribute("visible")) {
      toast.setAttribute("visible", true);
    }
  });
}
