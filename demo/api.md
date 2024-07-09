<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- The below content is automatically added from ./../api.md -->

# auro-toast

The auro-toast element provides users a way to display short, temporary messages.

## Properties

| Property  | Attribute | Type      | Description                                      |
|-----------|-----------|-----------|--------------------------------------------------|
| [noIcon](#noIcon)  | `noIcon`  | `Boolean` | Removes icon from the toast UI                   |
| [variant](#variant) | `variant` | `String`  | Component will render visually based on which variant value is set; currently supports `error`, `success` |
| [visible](#visible) | `visible` | `Boolean` | Sets state of toast to visible                   |

## Events

| Event          | Type     | Description                             |
|----------------|----------|-----------------------------------------|
| [onToastClose](#onToastClose) | `object` | Notifies that the toast has been closed |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Property Examples

#### visible

State of the push notification which determines if it is `visible`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/visible.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/visible.html -->
  <auro-button id="visibleToastBtn">
    Set visible to true
  </auro-button>
  <auro-toast id="visibleToast" style="display: block; margin: 0.5rem 0;">
    Default toast
  </auro-toast>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/visible.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/visible.html -->

```html
<auro-button id="visibleToastBtn">
  Set visible to true
</auro-button>
<auro-toast id="visibleToast" style="display: block; margin: 0.5rem 0;">
  Default toast
</auro-toast>
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/showToast.js) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/showToast.js -->

```js
export function showToast(toastID) {
  const toast = document.querySelector(toastID);

  if (!toast.hasAttribute('visible')) {
    toast.setAttribute('visible', true);
  }
};
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### variant

What the component will render visually based on which variant value is set; currently supports `error`, `success`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/variant.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/variant.html -->
  <auro-button id="defaultVariantBtn">
    Show default toast
  </auro-button>
  <auro-toast id="defaultVariant" style="display: block; margin: 0.5rem 0;">
    Default toast
  </auro-toast>
  <auro-button id="errorVariantBtn">
    Show error toast
  </auro-button>
  <auro-toast id="errorVariant" variant="error" style="display: block; margin: 0.5rem 0;">
    Unable to add lap infant. Please try again
  </auro-toast>
  <auro-button id="successVariantBtn">
    Show success toast
  </auro-button>
  <auro-toast id="successVariant" variant="success" style="display: block; margin: 0.5rem 0;">
    Successfully added lap infant
  </auro-toast>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/variant.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/variant.html -->

```html
<auro-button id="defaultVariantBtn">
  Show default toast
</auro-button>
<auro-toast id="defaultVariant" style="display: block; margin: 0.5rem 0;">
  Default toast
</auro-toast>
<auro-button id="errorVariantBtn">
  Show error toast
</auro-button>
<auro-toast id="errorVariant" variant="error" style="display: block; margin: 0.5rem 0;">
  Unable to add lap infant. Please try again
</auro-toast>
<auro-button id="successVariantBtn">
  Show success toast
</auro-button>
<auro-toast id="successVariant" variant="success" style="display: block; margin: 0.5rem 0;">
  Successfully added lap infant
</auro-toast>
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/showToast.js) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/showToast.js -->

```js
export function showToast(toastID) {
  const toast = document.querySelector(toastID);

  if (!toast.hasAttribute('visible')) {
    toast.setAttribute('visible', true);
  }
};
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### noIcon

Using the `noIcon` attribute will set no icon to be visible in the notification.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/noIcon.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/noIcon.html -->
  <auro-button id="noIconBtn"> Show toast with no icon </auro-button>
  <auro-toast id="noIcon" noIcon style="display: block; margin: 0.5rem 0;"> Default toast </auro-toast>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/noIcon.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/noIcon.html -->

```html
<auro-button id="noIconBtn"> Show toast with no icon </auro-button>
<auro-toast id="noIcon" noIcon style="display: block; margin: 0.5rem 0;"> Default toast </auro-toast>
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/showToast.js) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/showToast.js -->

```js
export function showToast(toastID) {
  const toast = document.querySelector(toastID);

  if (!toast.hasAttribute('visible')) {
    toast.setAttribute('visible', true);
  }
};
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Theme Support

The component may be restyled using the following code sample and changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../src/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../../src/tokens.scss -->

```scss
@import "./../node_modules/@aurodesignsystem/design-tokens/dist/tokens/SCSSVariables";

:host {
  --ds-auro-toast-background-color: var(--ds-color-brand-gray-400, #{$ds-color-brand-gray-400});
  --ds-auro-toast-border-color: var(--ds-color-border-divider-default, #{$ds-color-border-divider-default});
  --ds-auro-toast-close-button-icon-color: var(--ds-color-text-primary-inverse, #{$ds-color-text-primary-inverse});
  --ds-auro-toast-close-button-background-color: transparent;
  --ds-auro-toast-close-button-border-color: transparent;
  --ds-auro-toast-icon-color: var(--ds-color-text-primary-inverse, #{$ds-color-text-primary-inverse});
  --ds-auro-toast-text-color: var(--ds-color-text-primary-inverse, #{$ds-color-text-primary-inverse});
}
```
<!-- AURO-GENERATED-CONTENT:END -->
