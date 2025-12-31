```js
// Import the class only
import { AuroToast } from '@aurodesignsystem/auro-toast/class';

// Register with a custom name if desired
AuroToast.register('custom-toast');
```

This will create a new custom element `<custom-toast>` that behaves exactly like `<auro-toast>`, allowing both to coexist on the same page without interfering with each other.
