
import { AuroToast } from '../../src/auro-toast.js';

/**
 * The auro-toast element provides users a way to display short, temporary messages.
 */
class AuroToastWCA extends AuroToast {}

if (!customElements.get("auro-toast")) {
  customElements.define("auro-toast", AuroToastWCA);
}
