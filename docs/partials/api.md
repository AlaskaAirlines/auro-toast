<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Property & Attribute Examples

### Disable Auto Hide

Use the `disableAutoHide` attribute to prevent the toast from automatically dismissing itself.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/disable-auto-hide.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/disable-auto-hide.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### No Icon

Using the `noIcon` attribute will set no icon to be visible in the notification.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/no-icon.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/no-icon.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Time Until Hide

Using the `timeTilHide` attribute will set a timer in milliseconds for how long the notification will be visible before it automatically hides. The default is `5000` milliseconds.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/time-til-hide.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/time-til-hide.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Variant

What the component will render visually based on which variant value is set; currently supports `error`, `success`.

**Note:** The `error` variant does not automatically hide by default, like other variants.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/variant.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/variant.html) -->
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
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/custom-toast.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Visible

State of the push notification which determines if it is `visible`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/visible.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/visible.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Focus Management — trigger and triggerElement

When a toast is manually dismissed via the close button, focus should return to the element that originally triggered it. Use the `trigger` attribute to specify the `id` of that element, or the `triggerElement` property to pass a direct element reference. The `trigger` attribute takes precedence when both are set.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/trigger.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/trigger.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/trigger.js) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Common Usage Patterns & Functional Examples

### Multiple Toasts

The multi-notification use case requires the use of the `<auro-toaster>` component. Toaster will render the toasts at the bottom right of a page.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/multiple-toasts.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/multiple-toasts.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Dynamic Toasts

The dynamic notification use case requires the use of the `<auro-toaster>` component. Toaster will render the toasts at the bottom right of a page.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/dynamic-toasts.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/dynamic-toasts.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/dynamic-toasts.js) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Dynamic Injection of Standalone Toasts without auro-toaster

When dynamically injecting `auro-toast` elements at runtime, the consumer is responsible for a container element with `aria-live` that **must already be present in the DOM** before any toast is appended to it. Screen readers register a live region when it first encounters the element on the page — content added to it later will trigger an announcement. If a live region and toast content enter the DOM at the same time, the screen reader has no opportunity to register the region first and will **not** announce the content.

The required pattern is a persistent container — a `div` or equivalent — with `aria-live="polite"` or `aria-live="assertive"`* that remains in the DOM at all times. Your application logic then injects `auro-toast` elements into this container at runtime as notifications occur.

**Warning:** Never apply `display: none` to the live region container. Doing so removes it from the accessibility tree entirely, which prevents screen readers from registering the live region. Any toast announcements will be silently lost, resulting in a critical accessibility violation.

`auro-toast` automatically detects any ancestor live region at connection time. When one is found, it defers to that region and does not add its own role, preventing nested live regions.

\* Only use `aria-live="assertive"` if your UI is making use of toasts that are alerting the user of important information. If you are not using `auro-toaster` you are responsible for managing the changes between `assertive` and `polite` announcement states.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/standalone-toast.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/standalone-toast.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/standalone-toast.js) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Restyle Component with CSS Variables

The component may be restyled by changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- AURO-GENERATED-CONTENT:END -->
