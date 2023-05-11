import { AuroToast } from './src/auro-toast';

/**
 * Register Custom Element.
 * @param {Object} name - Name to use for custom element.
 * @returns {void}
 */
 const registerComponent = (name = 'custom-toast') => {
  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends AuroToast {});
  }
}

export { registerComponent }
