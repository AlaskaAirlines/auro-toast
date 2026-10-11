import { initBasicExample } from "../apiExamples/basic";
import { initDisableAutoHideExample } from "../apiExamples/disable-auto-hide";
import { initNoIconExample } from "../apiExamples/no-icon";
import { initTimeTilHideExample } from "../apiExamples/time-til-hide";
import { initVariantToastsExample } from "../apiExamples/variant";
import { initCustomToastExample } from "../apiExamples/custom-toast";
import { initVisibleExample } from "../apiExamples/visible";
import { initMultipleToastsExample } from "../apiExamples/multiple-toasts";
import { initDynamicToastsExample } from "../apiExamples/dynamic-toasts";
import { initStandaloneToastExample } from "../apiExamples/standalone-toast";
import { initTriggerExample } from "../apiExamples/trigger";

import "../src/registered";
/* eslint-disable jsdoc/require-jsdoc, no-magic-numbers, no-param-reassign */

export function initExamples(initCount) {
  // biome-ignore lint/style/noParameterAssign: legacy code, don't want to refactor right now
  initCount = initCount || 0;

  try {
    // javascript example function calls to be added here upon creation to test examples
    initBasicExample();
    initDisableAutoHideExample();
    initNoIconExample();
    initTimeTilHideExample();
    initVariantToastsExample();
    initCustomToastExample();
    initVisibleExample();
    initMultipleToastsExample();
    initDynamicToastsExample();
    initStandaloneToastExample();
    initTriggerExample();
  } catch (_err) {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initExamples(initCount + 1);
      }, 100);
    }
  }
}
