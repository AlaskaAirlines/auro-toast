/* eslint-disable jsdoc/require-jsdoc, no-magic-numbers, no-param-reassign */

import { initBasicExample } from '../apiExamples/basic';
import { initErrorExample } from '../apiExamples/error';
import { initSuccessExample } from '../apiExamples/success';
import { initMultipleToastsExample } from '../apiExamples/multipleToasts';

export function initExamples(initCount) {
  initCount = initCount || 0;

  try {
    // javascript example function calls to be added here upon creation to test examples
    initBasicExample();
    initErrorExample();
    initSuccessExample();
    initMultipleToastsExample();
  } catch (err) {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initExamples(initCount + 1);
      }, 100);
    }
  }
}
