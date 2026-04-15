<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-toast

The `auro-toast` element provides users a way to display short, temporary messages.

### Properties & Attributes

| Properties      | Attributes      | Modifiers | Type                             | Default | Description                                                                                                                                                                                                     |
| --------------- | --------------- | --------- | -------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| disableAutoHide | disableAutoHide |           | boolean                          |         | Prevents the toast from auto-hiding on the default time.                                                                                                                                                        |
| noIcon          | noIcon          |           | boolean                          |         | Removes icon from the toast UI.                                                                                                                                                                                 |
| timeTilHide     | timeTilHide     |           | number                           |         | Sets the time in milliseconds until the toast hides.                                                                                                                                                            |
| trigger         | trigger         |           | string                           |         | The id of the element that triggered the toast.<br>When the toast is manually closed, focus will return to this element.<br>Takes precedence over the triggerElement property if both are set.                  |
| triggerElement  |                 |           | HTMLElement                      |         | A direct reference to the element that triggered the toast.<br>When the toast is manually closed, focus will return to this element.<br>Use the trigger attribute instead if you prefer a declarative approach. |
| variant         | variant         |           | `error` \| `success` \| `custom` |         | Component will render visually based on which variant value is set.                                                                                                                                             |
| visible         | visible         |           | boolean                          |         | Sets state of toast to visible                                                                                                                                                                                  |

### Methods

| Name     | Parameters                                                           | Return | Description                                       |
| -------- | -------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of the element that you want to register. |        | This will register this element with the browser. |

### Events

| Name         | Description                             |
| ------------ | --------------------------------------- |
| onToastClose | Notifies that the toast has been closed |

### CSS Shadow Parts

| Name         | Description                         |
| ------------ | ----------------------------------- |
| close-button | Apply css to the toast close button |
| type-icon    | Apply css to the toast type icon    |
<!-- AURO-GENERATED-CONTENT:END -->

## Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../apiExamples/basic.html -->
  <auro-button id="basicToastBtn">
    Show default notification
  </auro-button>
  <!--
  NOTE: The manually added style is NOT necessary for use,
  Demo purposes ONLY!
  -->
  <auro-toast  style="display: block; margin: 0.5rem 0;" id="basicToast">
    Default notification with no error type.
  </auro-toast>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

```html
<auro-button id="basicToastBtn">
  Show default notification
</auro-button>
<!--
NOTE: The manually added style is NOT necessary for use,
Demo purposes ONLY!
-->
<auro-toast  style="display: block; margin: 0.5rem 0;" id="basicToast">
  Default notification with no error type.
</auro-toast>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Property & Attribute Examples

### Disable Auto Hide

Use the `disableAutoHide` attribute to prevent the toast from automatically dismissing itself.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/disable-auto-hide.html) -->
  <!-- The below content is automatically added from ./../apiExamples/disable-auto-hide.html -->
  <auro-button id="disableHideToastBtn">
    Show default notification
  </auro-button>
  <auro-toast style="display: block; margin: 0.5rem 0;" id="disableHideToast">
    Default notification with no error type.
  </auro-toast>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/disable-auto-hide.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/disable-auto-hide.html -->

```html
<auro-button id="disableHideToastBtn">
  Show default notification
</auro-button>
<auro-toast style="display: block; margin: 0.5rem 0;" id="disableHideToast">
  Default notification with no error type.
</auro-toast>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### No Icon

Using the `noIcon` attribute will set no icon to be visible in the notification.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/no-icon.html) -->
  <!-- The below content is automatically added from ./../apiExamples/no-icon.html -->
  <auro-button id="noIconBtn"> Show toast with no icon </auro-button>
  <auro-toast id="noIcon" noIcon style="display: block; margin: 0.5rem 0;"> Default toast. </auro-toast>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/no-icon.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/no-icon.html -->

```html
<auro-button id="noIconBtn"> Show toast with no icon </auro-button>
<auro-toast id="noIcon" noIcon style="display: block; margin: 0.5rem 0;"> Default toast. </auro-toast>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Time Until Hide

Using the `timeTilHide` attribute will set a timer in milliseconds for how long the notification will be visible before it automatically hides. The default is `5000` milliseconds.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/time-til-hide.html) -->
  <!-- The below content is automatically added from ./../apiExamples/time-til-hide.html -->
  <auro-button id="timeTilHideToastBtn">
    Show default notification
  </auro-button>
  <auro-toast timeTilHide="1000" style="display: block; margin: 0.5rem 0;" id="timeTilHideToast">
    Default notification with no error type.
  </auro-toast>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/time-til-hide.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/time-til-hide.html -->

```html
<auro-button id="timeTilHideToastBtn">
  Show default notification
</auro-button>
<auro-toast timeTilHide="1000" style="display: block; margin: 0.5rem 0;" id="timeTilHideToast">
  Default notification with no error type.
</auro-toast>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Variant

What the component will render visually based on which variant value is set; currently supports `error`, `success`.

**Note:** The `error` variant does not automatically hide by default, like other variants.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/variant.html) -->
  <!-- The below content is automatically added from ./../apiExamples/variant.html -->
  <auro-button id="defaultVariantBtn">
    Show default toast
  </auro-button>
  <auro-toast id="defaultVariant" style="display: block; margin: 0.5rem 0;">
    Default toast.
  </auro-toast>
  <auro-button id="errorVariantBtn">
    Show error toast
  </auro-button>
  <auro-toast id="errorVariant" variant="error" style="display: block; margin: 0.5rem 0;">
    Unable to add lap infant. Please try again.
  </auro-toast>
  <auro-button id="successVariantBtn">
    Show success toast
  </auro-button>
  <auro-toast id="successVariant" variant="success" style="display: block; margin: 0.5rem 0;">
    Successfully added lap infant.
  </auro-toast>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/variant.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/variant.html -->

```html
<auro-button id="defaultVariantBtn">
  Show default toast
</auro-button>
<auro-toast id="defaultVariant" style="display: block; margin: 0.5rem 0;">
  Default toast.
</auro-toast>
<auro-button id="errorVariantBtn">
  Show error toast
</auro-button>
<auro-toast id="errorVariant" variant="error" style="display: block; margin: 0.5rem 0;">
  Unable to add lap infant. Please try again.
</auro-toast>
<auro-button id="successVariantBtn">
  Show success toast
</auro-button>
<auro-toast id="successVariant" variant="success" style="display: block; margin: 0.5rem 0;">
  Successfully added lap infant.
</auro-toast>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Customizing Toast Notifications

The toast notification can be customized in several ways.

- By applying the `variant="custom"` attribute value, you may pass in custom svg to use in place of the defaults assigned to the other variants.
- You may recolor the toast notification using the tier 3 theme tokens.
- You may disable the auto hide behavior of the toast by applying the `disableAutoHide` attribute.
- You may programmatically show the toast by applying the `visible` attribute. (e.g. if you want the toast to show on load)

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/custom-toast.html) -->
<!-- The below content is automatically added from ../apiExamples/custom-toast.html -->
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/custom-toast.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/custom-toast.html -->

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

### Visible

State of the push notification which determines if it is `visible`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/visible.html) -->
  <!-- The below content is automatically added from ./../apiExamples/visible.html -->
  <auro-button id="visibleToastBtn">
    Set visible to true
  </auro-button>
  <auro-toast id="visibleToast" style="display: block; margin: 0.5rem 0;">
    Default toast.
  </auro-toast>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/visible.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/visible.html -->

```html
<auro-button id="visibleToastBtn">
  Set visible to true
</auro-button>
<auro-toast id="visibleToast" style="display: block; margin: 0.5rem 0;">
  Default toast.
</auro-toast>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Focus Management — trigger and triggerElement

When a toast is manually dismissed via the close button, focus should return to the element that originally triggered it. Use the `trigger` attribute to specify the `id` of that element, or the `triggerElement` property to pass a direct element reference. The `trigger` attribute takes precedence when both are set.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/trigger.html) -->
  <!-- The below content is automatically added from ./../apiExamples/trigger.html -->
  <p>Use the <code>trigger</code> attribute to pass the <code>id</code> of the element that opened the toast. When the toast is manually closed, focus will return to that element.</p>
  <auro-button id="triggerAttrBtn">
    Show notification
  </auro-button>
  <!--
  NOTE: The manually added style is NOT necessary for use,
  Demo purposes ONLY!
  -->
  <auro-toast style="display: block; margin: 0.5rem 0;" id="triggerAttrToast" trigger="triggerAttrBtn" disableAutoHide>
    Flight booked successfully
  </auro-toast>
  <p>Use the <code>triggerElement</code> property to pass a direct reference to the element that opened the toast. Useful when an <code>id</code> is not available or when working programmatically.</p>
  <auro-button id="triggerPropBtn">
    Show notification
  </auro-button>
  <auro-toast style="display: block; margin: 0.5rem 0;" id="triggerPropToast" disableAutoHide>
    Flight booked successfully.
  </auro-toast>
  <p>When both <code>trigger</code> and <code>triggerElement</code> are set, <code>trigger</code> takes precedence. In this example, <code>triggerElement</code> points to the second button but <code>trigger</code> points to the first — focus returns to the first button on close.</p>
  <auro-button id="triggerPrecedenceBtn1">
    Button 1 (trigger attribute target)
  </auro-button>
  <auro-button id="triggerPrecedenceBtn2">
    Button 2 (triggerElement target — ignored)
  </auro-button>
  <auro-toast style="display: block; margin: 0.5rem 0;" id="triggerPrecedenceToast" trigger="triggerPrecedenceBtn1" disableAutoHide>
    Flight booked successfully.
  </auro-toast>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/trigger.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/trigger.html -->

```html
<p>Use the <code>trigger</code> attribute to pass the <code>id</code> of the element that opened the toast. When the toast is manually closed, focus will return to that element.</p>
<auro-button id="triggerAttrBtn">
  Show notification
</auro-button>
<!--
NOTE: The manually added style is NOT necessary for use,
Demo purposes ONLY!
-->
<auro-toast style="display: block; margin: 0.5rem 0;" id="triggerAttrToast" trigger="triggerAttrBtn" disableAutoHide>
  Flight booked successfully
</auro-toast>
<p>Use the <code>triggerElement</code> property to pass a direct reference to the element that opened the toast. Useful when an <code>id</code> is not available or when working programmatically.</p>
<auro-button id="triggerPropBtn">
  Show notification
</auro-button>
<auro-toast style="display: block; margin: 0.5rem 0;" id="triggerPropToast" disableAutoHide>
  Flight booked successfully.
</auro-toast>
<p>When both <code>trigger</code> and <code>triggerElement</code> are set, <code>trigger</code> takes precedence. In this example, <code>triggerElement</code> points to the second button but <code>trigger</code> points to the first — focus returns to the first button on close.</p>
<auro-button id="triggerPrecedenceBtn1">
  Button 1 (trigger attribute target)
</auro-button>
<auro-button id="triggerPrecedenceBtn2">
  Button 2 (triggerElement target — ignored)
</auro-button>
<auro-toast style="display: block; margin: 0.5rem 0;" id="triggerPrecedenceToast" trigger="triggerPrecedenceBtn1" disableAutoHide>
  Flight booked successfully.
</auro-toast>
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/trigger.js) -->
<!-- The below code snippet is automatically added from ./../apiExamples/trigger.js -->

```js
/* eslint-disable jsdoc/require-jsdoc */

export function initTriggerExample() {
  // trigger attribute — pass element id as a string
  const attrBtn = document.querySelector("#triggerAttrBtn");
  const attrToast = document.querySelector("#triggerAttrToast");

  attrBtn.addEventListener("click", () => {
    if (!attrToast.hasAttribute("visible")) {
      attrToast.setAttribute("visible", true);
    }
  });

  // triggerElement property — pass a direct element reference
  const propBtn = document.querySelector("#triggerPropBtn");
  const propToast = document.querySelector("#triggerPropToast");

  propBtn.addEventListener("click", () => {
    if (!propToast.hasAttribute("visible")) {
      propToast.triggerElement = propBtn;
      propToast.setAttribute("visible", true);
    }
  });

  // precedence — trigger attribute wins over triggerElement when both are set
  const precedenceBtn1 = document.querySelector("#triggerPrecedenceBtn1");
  const precedenceBtn2 = document.querySelector("#triggerPrecedenceBtn2");
  const precedenceToast = document.querySelector("#triggerPrecedenceToast");

  precedenceBtn1.addEventListener("click", () => {
    if (!precedenceToast.hasAttribute("visible")) {
      precedenceToast.triggerElement = precedenceBtn2;
      precedenceToast.setAttribute("visible", true);
    }
  });

  precedenceBtn2.addEventListener("click", () => {
    if (!precedenceToast.hasAttribute("visible")) {
      precedenceToast.triggerElement = precedenceBtn2;
      precedenceToast.setAttribute("visible", true);
    }
  });
}
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Common Usage Patterns & Functional Examples

### Multiple Toasts

The multi-notification use case requires the use of the `<auro-toaster>` component. Toaster will render the toasts at the bottom right of a page.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/multiple-toasts.html) -->
  <!-- The below content is automatically added from ./../apiExamples/multiple-toasts.html -->
  <auro-button id="multiToastBtn-default">Show default toast</auro-button>
  <auro-button id="multiToastBtn-error">Show error toast</auro-button>
  <auro-button id="multiToastBtn-success">Show success toast</auro-button>
  <auro-toaster>
    <auro-toast id="multiToast-default">Default toast.</auro-toast>
    <auro-toast id="multiToast-error" variant="error">Unable to add lap infant. Please try again.</auro-toast>
    <auro-toast id="multiToast-success" variant="success">Successfully added lap infant.</auro-toast>
  </auro-toaster>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/multiple-toasts.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/multiple-toasts.html -->

```html
<auro-button id="multiToastBtn-default">Show default toast</auro-button>
<auro-button id="multiToastBtn-error">Show error toast</auro-button>
<auro-button id="multiToastBtn-success">Show success toast</auro-button>
<auro-toaster>
  <auro-toast id="multiToast-default">Default toast.</auro-toast>
  <auro-toast id="multiToast-error" variant="error">Unable to add lap infant. Please try again.</auro-toast>
  <auro-toast id="multiToast-success" variant="success">Successfully added lap infant.</auro-toast>
</auro-toaster>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Dynamic Toasts

The dynamic notification use case requires the use of the `<auro-toaster>` component. Toaster will render the toasts at the bottom right of a page.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/dynamic-toasts.html) -->
  <!-- The below content is automatically added from ./../apiExamples/dynamic-toasts.html -->
  <auro-button id="dynamicToastBtn-default">Show default toast</auro-button>
  <auro-button id="dynamicToastBtn-error">Show error toast</auro-button>
  <auro-button id="dynamicToastBtn-success">Show success toast</auro-button>
  <auro-toaster id="dynamicToaster">
  </auro-toaster>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/dynamic-toasts.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/dynamic-toasts.html -->

```html
<auro-button id="dynamicToastBtn-default">Show default toast</auro-button>
<auro-button id="dynamicToastBtn-error">Show error toast</auro-button>
<auro-button id="dynamicToastBtn-success">Show success toast</auro-button>
<auro-toaster id="dynamicToaster">
</auro-toaster>
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/dynamic-toasts.js) -->
<!-- The below code snippet is automatically added from ./../apiExamples/dynamic-toasts.js -->

```js
/* eslint-disable jsdoc/require-jsdoc */

const toastDefs = [
  { id: "dynamicToast-default", variant: null, message: "Default toast.", btnId: "dynamicToastBtn-default" },
  { id: "dynamicToast-error", variant: "error", message: "Unable to add lap infant. Please try again.", btnId: "dynamicToastBtn-error" },
  { id: "dynamicToast-success", variant: "success", message: "Successfully added lap infant.", btnId: "dynamicToastBtn-success" },
];

export function initDynamicToastsExample() {
  const toaster = document.querySelector("#dynamicToaster");

  toastDefs.forEach(({ id, variant, message, btnId }) => {
    document.querySelector(`#${btnId}`).addEventListener("click", () => {
      const toast = document.createElement("auro-toast");
      toast.id = id;
      if (variant) {
        toast.setAttribute("variant", variant);
      }
      toast.setAttribute("visible", true);
      toast.textContent = message;
      toaster.appendChild(toast);
      console.log("Toast added:", toast); // eslint-disable-line no-console
    });
  });
}
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Dynamic Injection of Standalone Toasts without auro-toaster

When dynamically injecting `auro-toast` elements at runtime, the consumer is responsible for a container element with `aria-live` that **must already be present in the DOM** before any toast is appended to it. Screen readers register a live region when it first encounters the element on the page — content added to it later will trigger an announcement. If a live region and toast content enter the DOM at the same time, the screen reader has no opportunity to register the region first and will **not** announce the content.

The required pattern is a persistent container — a `div` or equivalent — with `aria-live="polite"` or `aria-live="assertive"`* that remains in the DOM at all times. Your application logic then injects `auro-toast` elements into this container at runtime as notifications occur.

`auro-toast` automatically detects any ancestor live region at connection time. When one is found, it defers to that region and does not add its own role, preventing nested live regions.

\* Only use `aria-live="assertive"` if your UI is making use of toasts that are alerting the user of important information. If you are not using `auro-toaster` you are responsible for managing the changes between `assertive` and `polite` announcement states.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/standalone-toast.html) -->
  <!-- The below content is automatically added from ./../apiExamples/standalone-toast.html -->
  <auro-button id="standaloneToastBtn">Show toast</auro-button>
  <div id="standaloneContainer" aria-live="polite" aria-atomic="false"></div>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/standalone-toast.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/standalone-toast.html -->

```html
<auro-button id="standaloneToastBtn">Show toast</auro-button>
<div id="standaloneContainer" aria-live="polite" aria-atomic="false"></div>
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/standalone-toast.js) -->
<!-- The below code snippet is automatically added from ./../apiExamples/standalone-toast.js -->

```js
/* eslint-disable jsdoc/require-jsdoc */

export function initStandaloneToastExample() {
  const container = document.querySelector("#standaloneContainer");

  document.querySelector("#standaloneToastBtn").addEventListener("click", () => {
    const toast = document.createElement("auro-toast");
    toast.setAttribute("visible", "");
    toast.setAttribute("variant", "success");
    toast.textContent = "Successfully added lap infant";
    container.appendChild(toast);
  });
}
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Restyle Component with CSS Variables

The component may be restyled by changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

```scss
@use "@aurodesignsystem/design-tokens/dist/themes/alaska/SCSSVariables--alaska" as v;

:host {
  --ds-auro-toast-close-button-hover-container-color: var(--ds-advanced-color-button-tertiary-background-hover, #{v.$ds-advanced-color-button-tertiary-background-hover});
  --ds-auro-toast-container-color: var(--ds-advanced-color-shared-background-strong, #{v.$ds-advanced-color-shared-background-strong});
  --ds-auro-toast-icon-color: var(--ds-basic-color-texticon-inverse, #{v.$ds-basic-color-texticon-inverse});
  --ds-auro-toast-text-color: var(--ds-basic-color-texticon-inverse, #{v.$ds-basic-color-texticon-inverse});
}
```
<!-- AURO-GENERATED-CONTENT:END -->
