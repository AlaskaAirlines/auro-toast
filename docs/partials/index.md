<!--
The index.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/index.md`
-->

# Toast

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./description.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Component use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./useCases.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

### The setup
Triggering the toasts relies on setting the `visible` property to `true`. See the following example to see how this code is used in an example.

```js
showToast = (toastID) => {
  const toast = document.querySelector(toastID);

  if (!toast.hasAttribute('visible')) {
    toast.setAttribute('visible', true);
  }
};
```

## Default push notifications

The following demo illustrates the `default` notification using the `<auro-toast>` element. This push notification will automatically dismiss after five seconds. The user may also dismiss it manually. The toast is **NOT** removed from the DOM. The visible property is set to `false`, which will hide the toast on the UI.

Also notice in this demo the use of the `noIcon` attribute. this attribute removes the use of the default `information` icon.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Single notification

Aside from the `default` notification, the `<auro-toast>` supports multiple variations, `success` and `error`. See below for more information on these variants.

### Error notification

The error push notification using the `<auro-toast>` element will **NOT** automatically dismiss itself. The user **MUST** dismiss the notification manually. When the notification is dismissed, it is not removed from the DOM. The `visible` property is set to `false`, which hides the notification from the UI.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/error.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/error.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Success notification

The success push notification using the `<auro-toast>` element will automatically dismiss after five seconds if the user does not manually dismiss it. In this case, the notification is not removed from the DOM. The `visible` property is set to `false`, which hides the notification from the UI.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/success.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/success.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Multiple toasts

The multi-notification use case requires the use of the `<auro-toaster>` component.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/multipleToasts.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/multipleToasts.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Dynamic toasts

If you choose to implement push notifications dynamically, the following is an example of how to implement dynamic `<auro-toast>` elements using Vue.

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

The following example is for the HTML template.

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

## Customizing Toast Notifications

The toast notification can be customized in several ways.

- By applying the `variant="custom"` attribute value, you may pass in custom svg to use in place of the defaults assigned to the other variants.
- You may recolor the toast notification using the tier 3 theme tokens.
- You may disable the auto hide behavior of the toast by applying the `disableAutoHide` attribute.
- You may programmatically show the toast by applying the `visible` attribute. (e.g. if you want the toast to show on load)

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/customToast.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/customToast.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom element. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-toast` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `AuroToast.register(name)` method and pass in a unique name.

```js
import { AuroToast } from './src/auro-toast.js';

AuroToast.register('custom-toast');
```

This will create a new custom element that you can use in your HTML that will function identically to the `auro-toast` element.

<div class="exampleWrapper">
  <custom-toast variant="error" visible>Salutations World!</custom-toast>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

```html
  <custom-toast variant="error" visible>Salutations World!</custom-toast>
```

</auro-accordion>
