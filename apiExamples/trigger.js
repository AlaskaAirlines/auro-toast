/* eslint-disable jsdoc/require-jsdoc */

export function initTriggerExample() {
  // trigger attribute — pass element id as a string
  const attrBtn = document.querySelector("#triggerAttrBtn");
  const attrToast = document.querySelector("#triggerAttrToast");

  attrBtn.addEventListener("click", () => {
    if (!attrToast.hasAttribute("visible")) {
      attrToast.setAttribute("visible", true);
    }
  });

  // triggerElement property — pass a direct element reference
  const propBtn = document.querySelector("#triggerPropBtn");
  const propToast = document.querySelector("#triggerPropToast");

  propBtn.addEventListener("click", () => {
    if (!propToast.hasAttribute("visible")) {
      propToast.triggerElement = propBtn;
      propToast.setAttribute("visible", true);
    }
  });

  // precedence — trigger attribute wins over triggerElement when both are set
  const precedenceBtn1 = document.querySelector("#triggerPrecedenceBtn1");
  const precedenceBtn2 = document.querySelector("#triggerPrecedenceBtn2");
  const precedenceToast = document.querySelector("#triggerPrecedenceToast");

  precedenceBtn1.addEventListener("click", () => {
    if (!precedenceToast.hasAttribute("visible")) {
      precedenceToast.triggerElement = precedenceBtn2;
      precedenceToast.setAttribute("visible", true);
    }
  });

  precedenceBtn2.addEventListener("click", () => {
    if (!precedenceToast.hasAttribute("visible")) {
      precedenceToast.triggerElement = precedenceBtn2;
      precedenceToast.setAttribute("visible", true);
    }
  });
}
