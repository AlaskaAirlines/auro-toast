/* eslint-disable jsdoc/require-jsdoc */

const toastDefs = [
  { id: "dynamicToast-default", variant: null, message: "Default toast.", btnId: "dynamicToastBtn-default" },
  { id: "dynamicToast-error", variant: "error", message: "Unable to add lap infant. Please try again.", btnId: "dynamicToastBtn-error" },
  { id: "dynamicToast-success", variant: "success", message: "Successfully added lap infant.", btnId: "dynamicToastBtn-success" },
];

// simple in-memory registry of active toasts
const activeToasts = new Map();

function generateToastId(baseId) {
  return `${baseId}-${crypto.randomUUID()}`;
}

export function initDynamicToastsExample() {
  const toaster = document.querySelector("#dynamicToaster");

  toastDefs.forEach(({ id: baseId, variant, message, btnId }) => {
    document.querySelector(`#${btnId}`).addEventListener("click", () => {
      const toast = document.createElement("auro-toast");

      const toastId = generateToastId(baseId);

      toast.id = toastId;

      if (variant) {
        toast.setAttribute("variant", variant);
      }

      toast.setAttribute("visible", true);
      toast.textContent = message;

      toaster.appendChild(toast);

      // 👇 now the ID is actually used meaningfully
      activeToasts.set(toastId, toast);

      console.log("Toast added:", toastId);

      // optional cleanup if your component doesn't auto-remove itself
      toast.addEventListener("toast-close", () => {
        activeToasts.delete(toastId);
      });
    });
  });
}
