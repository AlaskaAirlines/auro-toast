/* eslint-disable jsdoc/require-jsdoc, no-magic-numbers, no-param-reassign */

import { initBasicExample } from "../apiExamples/basic";
import { initCustomExample } from "../apiExamples/customToast";
import { initErrorExample } from "../apiExamples/error";
import { initMultipleToastsExample } from "../apiExamples/multipleToasts";
import { initSuccessExample } from "../apiExamples/success";

import { AuroToast } from "../src/auro-toast.js";

AuroToast.register(); // registering to `auro-toast`
AuroToast.register("custom-toast");

export function initExamples(initCount) {
  // biome-ignore lint/style/noParameterAssign: legacy code, don't want to refactor right now
  initCount = initCount || 0;

  try {
    // javascript example function calls to be added here upon creation to test examples
    initBasicExample();
    initCustomExample();
    initErrorExample();
    initSuccessExample();
    initMultipleToastsExample();
  } catch (_err) {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initExamples(initCount + 1);
      }, 100);
    }
  }
}
