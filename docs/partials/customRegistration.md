```js
// Import the class only
import { AuroToast } from '@aurodesignsystem/auro-toast/class';
// Register with a custom name if desired
AuroToast.register('custom-toast');
```

This creates a custom element `<custom-toast>` that works like `<auro-toast>`, so both can be on the same page without interfering with each other. `<auro-toaster>` only announces errors urgently for toasts named `auro-toast` or starting with `auro-toast_`.
