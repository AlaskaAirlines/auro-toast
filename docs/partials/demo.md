<!--
The demo.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/demo.md`
-->

# Toast

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./description.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Component use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./useCases.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

### The setup
Triggering the toasts relies on setting the visible property to true. See the following example code which is used in this demo.

```js
showToast = (toastID) => {
  const toast = document.querySelector(toastID);

  if (!toast.hasAttribute('visible')) {
    toast.setAttribute('visible', true);
  }
};
```

## auro-toast default use
The following illustrates the default use of the auro-toast. This toast will automatically dismiss after five seconds if the user does not dismiss it. In this case, the toast is not removed from the DOM. The visible property is set to false, which hides the toast on the UI.
<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Single toasts
### Error
The error toast will not automatically dismiss itself. The user must close the toast. When the toast is closed, it is not removed from the DOM. The visible property is set to false, which hides the toast on the UI.
<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/error.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/error.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Success
The success toast will automatically dismiss after five seconds if the user does not dismiss it. In this case, the toast is not removed from the DOM. The visible property is set to false, which hides the toast on the UI.
<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/success.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/success.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Multiple toasts
The auro-toast multi-toasts use case requires the use of the auro-toaster component.
<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/multipleToasts.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/multipleToasts.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Dynamic toasts
If you choose to implement toasts dynamically, the following is an example of how to implement dynamic toasts using Vue.
```js
import { v4 as uuidv4 } from 'uuid';

interface ToastEvent {
  variant: string,
  message: string
}

interface Toast {
  id: string
  variant: string,
  message: string,
  visible: boolean
}

const toasts = ref<Array<Toast>>([]);


// Function that adds toasts to the toasts array, which will trigger the toast to be visible
handleToastEvent(e: ToastEvent) {
  toast.id = uuidv4();
  toast.visible = true;
  toast.variant = e.variant;
  toast.message = e.message
  toasts.value.push(toast);
}

// Function that removes the toast from the DOM
handleOnToastClose(event) {
  // In event.detail comes the ID of the auro-toast that was closed (visible was set to false)
  const id = event.detail.id;
  toasts.value = toasts.filter((t) => t.id !== id)
}
```
```html
<auro-toaster>
     <auro-toast 
      v-for="(toast, i) in toasts"
      :id="toast.id" 
      :visible="toast.visible"
      :variant="toast.variant"
      @on-toast-close="handleOnToastClose">
        {{ toast.message }}
     </auro-toast>
  <auro-toaster>
```


## Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom clement. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-toast` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `registerComponent(name)` method and pass in a unique name.

```js
import './node_modules/@alaskaairux/auro-toast';
registerComponent('custom-toast');
```

This will create a new custom element that you can use in your HTML that will function identically to the `auro-toast` element.

<div class="exampleWrapper">
  <custom-toast variant="error" visible>Salutations World!</custom-toast>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
  <custom-toast variant="error" visible>Salutations World!</custom-toast>
```

</auro-accordion>
