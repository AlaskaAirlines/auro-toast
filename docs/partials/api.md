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

## Property and attribute examples

### Disable auto hide

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

### No icon

Use the `noIcon` attribute to hide the icon.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/no-icon.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/no-icon.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Time until hide

Use the `timeTilHide` attribute to set how long, in milliseconds, the toast stays visible before it hides. The default is `5000`. Error toasts and toasts with `disableAutoHide` never hide on their own.

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

Use `variant` to set the toast's color and icon: `success`, `error`, or `custom`. Any other value shows an information icon.

**Note:** Error toasts never hide on their own, even when `timeTilHide` is set. They stay open until someone closes them.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/variant.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/variant.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Customizing toast notifications

You can customize a toast in several ways:

- Set `variant="custom"` and add your own icon as a child with `slot="customSvg"`.
- Recolor the toast with the `--ds-auro-toast-*` custom properties.
- Add `disableAutoHide` to keep the toast open until someone closes it.
- Add `visible` to show the toast when the page loads.

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

Add the `visible` attribute to show the toast. The toast removes it when it closes.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/visible.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/visible.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Focus management with `trigger` and `triggerElement`

When someone closes a toast with the close button, focus returns to the element that opened it. Use the `trigger` attribute to set the `id` of that element, or the `triggerElement` property to pass the element itself. When both are set, `trigger` takes precedence. If no element has that `id`, the toast uses `triggerElement`.

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

## Common usage patterns

### Multiple toasts

Use `<auro-toaster>` to show several toasts at once. It displays them at the bottom of the screen.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/multiple-toasts.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/multiple-toasts.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Dynamic toasts

Use `<auro-toaster>` to add toasts with JavaScript while the page runs. It displays them at the bottom of the screen and announces them to screen readers. To add toasts without `<auro-toaster>`, see the next section.

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

### Dynamic injection of standalone toasts without `auro-toaster`

When you add `auro-toast` elements with JavaScript, you're responsible for a container element with `aria-live` that **must already be in the DOM** before you add any toast to it. Screen readers register a live region when they first encounter the element on the page, and they announce content added to it later. If the live region and the toast enter the DOM together, the screen reader can't register the region first and doesn't announce the content.

Use a persistent container, such as a `div`, with `aria-live="polite"` or `aria-live="assertive"`* that stays in the DOM at all times. Your application then adds `auro-toast` elements to this container as notifications occur.

**Warning:** Don't apply `display: none` to a live region while it's in use. This removes it from the accessibility tree, so screen readers can't detect updates, and any announcements made during that time are lost.

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

## Restyle with CSS custom properties

Restyle the component by changing the values of the following custom properties.

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- AURO-GENERATED-CONTENT:END -->
