import { initNoIconExample } from "../apiExamples/noIcon";
import { initTimeTilHideExample } from "../apiExamples/timeTilHide";
import { initVariantToastsExample } from "../apiExamples/variant";
import { initVisibleExample } from "../apiExamples/visible";

import "../index.js";
/* eslint-disable jsdoc/require-jsdoc, no-magic-numbers, no-param-reassign */

export function initExamples(initCount) {
  // biome-ignore lint/style/noParameterAssign: legacy code, don't want to refactor right now
  initCount = initCount || 0;

  try {
    // javascript example function calls to be added here upon creation to test examples
    initVisibleExample();
    initVariantToastsExample();
    initNoIconExample();
    initTimeTilHideExample();
  } catch (_err) {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initExamples(initCount + 1);
      }, 100);
    }
  }
}
