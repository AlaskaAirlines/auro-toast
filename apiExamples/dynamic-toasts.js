/* eslint-disable jsdoc/require-jsdoc */

const toastDefs = [
  { id: "dynamicToast-default", variant: null, message: "Default toast", btnId: "dynamicToastBtn-default" },
  { id: "dynamicToast-error", variant: "error", message: "Unable to add lap infant. Please try again", btnId: "dynamicToastBtn-error" },
  { id: "dynamicToast-success", variant: "success", message: "Successfully added lap infant", btnId: "dynamicToastBtn-success" },
];

export function initDynamicToastsExample() {
  const toaster = document.querySelector("#dynamicToaster");

  toastDefs.forEach(({ id, variant, message, btnId }) => {
    document.querySelector(`#${btnId}`).addEventListener("click", () => {
      const toast = document.createElement("auro-toast");
      toast.id = id;
      if (variant) {
        toast.setAttribute("variant", variant);
      }
      toast.setAttribute("visible", true);
      toast.textContent = message;
      toaster.appendChild(toast);
      console.log("Toast added:", toast); // eslint-disable-line no-console
    });
  });
}
