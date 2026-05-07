/* eslint-disable jsdoc/require-jsdoc */

export function initStandaloneToastExample() {
  const container = document.querySelector("#standaloneContainer");

  document.querySelector("#standaloneToastBtn").addEventListener("click", () => {
    const toast = document.createElement("auro-toast");
    toast.setAttribute("visible", "");
    toast.setAttribute("variant", "success");
    toast.textContent = "Successfully added lap infant";
    container.appendChild(toast);
  });
}
