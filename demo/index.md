<!--
The index.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/index.md`
-->

# Toast

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./description.md) -->
<!-- The below content is automatically added from ./description.md -->
The `<auro-toast>` element is a [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for the purpose of sending an unobtrusive toast (or push) notification to your visitors.

The `<auro-toaster>` wrapper-element is a [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for the purpose of managing a series of notifications  at the bottom of the screen using the `<auro-toast>` element.
<!-- AURO-GENERATED-CONTENT:END -->

## Component use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./useCases.md) -->
<!-- The below content is automatically added from ./useCases.md -->
The `<auro-toast>` use cases include:

* Sending an error push notification
* Sending a success push notification
* Sending any type of push notification
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
<!-- The below content is automatically added from ./../../apiExamples/basic.html -->
<!-- icon variant -->
<auro-button id="basicToastBtn">
  Show default notification
</auro-button>
<auro-toast style="display: block; margin: 0.5rem 0;"id="basicToast">
  Default notification with no error type
</auro-toast>
<!-- no icon variant -->
<auro-button id="basicToast-noIconBtn">
  Show default notification with no icon
</auro-button>
<auro-toast style="display: block; margin: 0.5rem 0;" id="basicToast-noIcon" noIcon>
  Default notification with no error type
</auro-toast>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
<!-- icon variant -->
<auro-button id="basicToastBtn">
  Show default notification
</auro-button>
<auro-toast style="display: block; margin: 0.5rem 0;"id="basicToast">
  Default notification with no error type
</auro-toast>
<!-- no icon variant -->
<auro-button id="basicToast-noIconBtn">
  Show default notification with no icon
</auro-button>
<auro-toast style="display: block; margin: 0.5rem 0;" id="basicToast-noIcon" noIcon>
  Default notification with no error type
</auro-toast>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Single notification

Aside from the `default` notification, the `<auro-toast>` supports multiple variations, `success` and `error`. See below for more information on these variants.

### Error notification

The error push notification using the `<auro-toast>` element will **NOT** automatically dismiss itself. The user **MUST** dismiss the notification manually. When the notification is dismissed, it is not removed from the DOM. The `visible` property is set to `false`, which hides the notification from the UI.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/error.html) -->
<!-- The below content is automatically added from ./../../apiExamples/error.html -->
<auro-button id="errorToastBtn">Show error notification</auro-button>
<auro-toast style="display: block; margin: 0.5rem 0;" variant="error" id="errorToast"> Unable to add lap infant. Please try again  </auro-toast>
<auro-button id="errorToast-noIconBtn">Show error notification with no icon</auro-button>
<auro-toast style="display: block; margin: 0.5rem 0;" variant="error" id="errorToast-noIcon" noIcon> Unable to add lap infant. Please try again  </auro-toast>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/error.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/error.html -->

```html
<auro-button id="errorToastBtn">Show error notification</auro-button>
<auro-toast style="display: block; margin: 0.5rem 0;" variant="error" id="errorToast"> Unable to add lap infant. Please try again  </auro-toast>
<auro-button id="errorToast-noIconBtn">Show error notification with no icon</auro-button>
<auro-toast style="display: block; margin: 0.5rem 0;" variant="error" id="errorToast-noIcon" noIcon> Unable to add lap infant. Please try again  </auro-toast>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Success notification

The success push notification using the `<auro-toast>` element will automatically dismiss after five seconds if the user does not manually dismiss it. In this case, the notification is not removed from the DOM. The `visible` property is set to `false`, which hides the notification from the UI.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/success.html) -->
<!-- The below content is automatically added from ./../../apiExamples/success.html -->
<auro-button id="successToastBtn">Show success toast</auro-button>
<auro-toast style="display: block; margin: 0.5rem 0;" variant="success" id="successToast"> Successfully added lap infant  </auro-toast>
<auro-button id="successToast-noIconBtn">Show success toast with no icon</auro-button>
<auro-toast style="display: block; margin: 0.5rem 0;" variant="success" id="successToast-noIcon" noIcon> Successfully added lap infant  </auro-toast>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/success.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/success.html -->

```html
<auro-button id="successToastBtn">Show success toast</auro-button>
<auro-toast style="display: block; margin: 0.5rem 0;" variant="success" id="successToast"> Successfully added lap infant  </auro-toast>
<auro-button id="successToast-noIconBtn">Show success toast with no icon</auro-button>
<auro-toast style="display: block; margin: 0.5rem 0;" variant="success" id="successToast-noIcon" noIcon> Successfully added lap infant  </auro-toast>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Multiple toasts

The multi-notification use case requires the use of the `<auro-toaster>` component.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/multipleToasts.html) -->
<!-- The below content is automatically added from ./../../apiExamples/multipleToasts.html -->
<auro-button id="multiToastBtn-default">Show default toast</auro-button>
<auro-button id="multiToastBtn-error">Show error toast</auro-button>
<auro-button id="multiToastBtn-success">Show success toast</auro-button>
<auro-toaster>
  <auro-toast id="multiToast-default">Default toast</auro-toast>
  <auro-toast id="multiToast-error" variant="error">Unable to add lap infant. Please try again</auro-toast>
  <auro-toast id="multiToast-success" variant="success">Successfully added lap infant</auro-toast>
</auro-toaster>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/multipleToasts.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/multipleToasts.html -->

```html
<auro-button id="multiToastBtn-default">Show default toast</auro-button>
<auro-button id="multiToastBtn-error">Show error toast</auro-button>
<auro-button id="multiToastBtn-success">Show success toast</auro-button>
<auro-toaster>
  <auro-toast id="multiToast-default">Default toast</auro-toast>
  <auro-toast id="multiToast-error" variant="error">Unable to add lap infant. Please try again</auro-toast>
  <auro-toast id="multiToast-success" variant="success">Successfully added lap infant</auro-toast>
</auro-toaster>
```
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
<!-- The below content is automatically added from ./../../apiExamples/customToast.html -->
<!-- icon variant -->
<auro-button id="customizedToastBtn">
  Show customized notification
</auro-button>
<auro-toast
  id="customizedToast"
  variant="custom"
  visible
  disableAutoHide
  style="--ds-auro-toast-container-color: var(--ds-color-background-info-default); --ds-auro-toast-text-color: var(--ds-color-text-primary-default);">
  Did you know you can create a price alert for this route?
  <br />
  <auro-button variant="tertiary">Create Alert</auro-button>
  <svg slot="customSvg" aria-labelledby="pin-trip-filled__desc" class="ico_squareLarge" role="img" viewBox="0 0 24 24" style="min-width: var(--auro-size-lg, var(--ds-size-300, 1.5rem)); height: var(--auro-size-lg, var(--ds-size-300, 1.5rem)); fill: currentcolor;"><title></title><desc id="pin-trip-filled__desc">drop pin with circles.</desc><path d="M10.045 3.345a.75.75 0 0 1 .785-.714l.05.003a.75.75 0 0 1-.082 1.498l-.04-.002a.75.75 0 0 1-.713-.785m-1.217.22a.75.75 0 0 1-.357 1l-.034.016a.75.75 0 0 1-.655-1.35l.047-.022a.75.75 0 0 1 .999.357m3.949.186a.75.75 0 0 1 1.012-.318l.045.023a.75.75 0 0 1-.703 1.326l-.035-.019a.75.75 0 0 1-.319-1.012M6.508 5.057a.75.75 0 0 1 .2 1.041l-.01.017a.75.75 0 1 1-1.246-.836l.014-.022a.75.75 0 0 1 1.042-.2m8.577.22a.75.75 0 0 1 1.038.218l.028.044a.75.75 0 0 1-1.264.808l-.02-.032a.75.75 0 0 1 .218-1.038m6.02 7.014c0-2.789-2.44-4.88-4.88-4.88s-4.881 2.091-4.881 4.88q0 2.559 4.11 8.496l.199.285.055.068a.697.697 0 0 0 1.088-.068q4.31-6.16 4.309-8.781m-6.275 0a1.394 1.394 0 1 1 2.789 0 1.394 1.394 0 0 1-2.789 0M4.635 10.704a1.74 1.74 0 1 0 0-3.48 1.74 1.74 0 0 0 0 3.48"></path></svg>
</auro-toast>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/customToast.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/customToast.html -->

```html
<!-- icon variant -->
<auro-button id="customizedToastBtn">
  Show customized notification
</auro-button>
<auro-toast
  id="customizedToast"
  variant="custom"
  visible
  disableAutoHide
  style="--ds-auro-toast-container-color: var(--ds-color-background-info-default); --ds-auro-toast-text-color: var(--ds-color-text-primary-default);">
  Did you know you can create a price alert for this route?
  <br />
  <auro-button variant="tertiary">Create Alert</auro-button>
  <svg slot="customSvg" aria-labelledby="pin-trip-filled__desc" class="ico_squareLarge" role="img" viewBox="0 0 24 24" style="min-width: var(--auro-size-lg, var(--ds-size-300, 1.5rem)); height: var(--auro-size-lg, var(--ds-size-300, 1.5rem)); fill: currentcolor;"><title></title><desc id="pin-trip-filled__desc">drop pin with circles.</desc><path d="M10.045 3.345a.75.75 0 0 1 .785-.714l.05.003a.75.75 0 0 1-.082 1.498l-.04-.002a.75.75 0 0 1-.713-.785m-1.217.22a.75.75 0 0 1-.357 1l-.034.016a.75.75 0 0 1-.655-1.35l.047-.022a.75.75 0 0 1 .999.357m3.949.186a.75.75 0 0 1 1.012-.318l.045.023a.75.75 0 0 1-.703 1.326l-.035-.019a.75.75 0 0 1-.319-1.012M6.508 5.057a.75.75 0 0 1 .2 1.041l-.01.017a.75.75 0 1 1-1.246-.836l.014-.022a.75.75 0 0 1 1.042-.2m8.577.22a.75.75 0 0 1 1.038.218l.028.044a.75.75 0 0 1-1.264.808l-.02-.032a.75.75 0 0 1 .218-1.038m6.02 7.014c0-2.789-2.44-4.88-4.88-4.88s-4.881 2.091-4.881 4.88q0 2.559 4.11 8.496l.199.285.055.068a.697.697 0 0 0 1.088-.068q4.31-6.16 4.309-8.781m-6.275 0a1.394 1.394 0 1 1 2.789 0 1.394 1.394 0 0 1-2.789 0M4.635 10.704a1.74 1.74 0 1 0 0-3.48 1.74 1.74 0 0 0 0 3.48"></path></svg>
</auro-toast>
```
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
