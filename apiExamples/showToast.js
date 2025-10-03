export function showToast(toastID) {
  const toast = document.querySelector(toastID);

  if (!toast.hasAttribute("visible")) {
    toast.setAttribute("visible", true);
  }
}
