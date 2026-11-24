<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-toast

Shows a short, temporary message, such as a confirmation or an error.

**Key capabilities**
- **Success and error styles**: Set `variant` to `success` or `error` to change the color and icon, or to `custom` to show your own icon.
- **Hides on its own**: The toast hides after five seconds, except error toasts, which stay open until someone closes them; use `timeTilHide` to change the time or `disableAutoHide` to keep any toast open.
- **Returns focus**: Set `trigger` or `triggerElement` to send focus back to the element that opened the toast when someone closes it.
- **Stacks with other toasts**: Wrap toasts in `auro-toaster` to stack them at the bottom of the screen.

**Example**
<pre class="language-html"><code class="language-html">&lt;auro-toast visible&gt;Your changes were saved.&lt;/auro-toast&gt;</code></pre>

### Properties and attributes

| Properties      | Attributes      | Modifiers | Type                             | Default | Description                                                                                                                                                                                                                                                                 |
| --------------- | --------------- | --------- | -------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| disableAutoHide | disableautohide |           | boolean                          |         | Stops the toast from hiding on its own, even when `timeTilHide` is set. People can still close it with the close button.                                                                                                                                                    |
| noIcon          | noicon          |           | boolean                          |         | Hides the icon at the start of the toast, including a custom icon.                                                                                                                                                                                                          |
| timeTilHide     | timetilhide     |           | number                           | `5000`  | Sets how long, in milliseconds, the toast stays visible before it hides. Has no effect on error toasts or when `disableAutoHide` is set.                                                                                                                                    |
| trigger         | trigger         |           | string                           |         | Sets the `id` of the element that opened the toast, so focus returns to it when someone closes the toast with its close button.<br>Takes precedence over `triggerElement` when both are set and an element has this `id`.                                                   |
| triggerElement  |                 |           | HTMLElement                      |         | Sets the element that opened the toast, so focus returns to it when someone closes the toast with its close button.<br>Use `trigger` instead to set it with an `id` in markup. `trigger` takes precedence when both are set.                                                |
| variant         | variant         |           | `error` \| `success` \| `custom` |         | Sets the toast's color and icon. Use `success` to confirm that something worked, `error` to report a problem, and `custom` to show your own icon (a child with `slot="customSvg"`).<br>Error toasts don't hide on their own, and any other value shows an information icon. |
| visible         | visible         |           | boolean                          |         | Shows the toast. The toast sets this back to `false` when it closes, whether it hides on its own or someone uses the close button.                                                                                                                                          |

### Methods

| Name     | Parameters                                                    | Return | Description                                              |
| -------- | ------------------------------------------------------------- | ------ | -------------------------------------------------------- |
| register | `name` (string) - The tag name to register the element under. |        | Registers the element with the browser under a tag name. |

### Events

| Name         | Description                                                                                      |
| ------------ | ------------------------------------------------------------------------------------------------ |
| toast-close  | Fires when the toast closes. The `detail` holds `visible` (always `false`) and the toast's `id`. |
| onToastClose | Deprecated: Use `toast-close` instead.                                                           |

### CSS shadow parts

| Name         | Description                                                            |
| ------------ | ---------------------------------------------------------------------- |
| close-button | The button that closes the toast.                                      |
| type-icon    | The icon at the start of the toast. Not rendered when `noIcon` is set. |

# auro-toaster

Shows `auro-toast` elements in a stack fixed to the bottom of the screen and announces them to screen readers.

**Key capabilities**
- **Stacks toasts**: Fixes the toasts to the bottom of the screen, so they stay in view while the page scrolls.
- **Announces toasts**: Screen readers announce each toast politely, and error toasts are announced right away.

**Example**
<pre class="language-html"><code class="language-html">&lt;auro-toaster&gt;
  &lt;auro-toast visible&gt;Your changes were saved.&lt;/auro-toast&gt;
&lt;/auro-toaster&gt;</code></pre>

### Methods

| Name     | Parameters                                                    | Return | Description                                              |
| -------- | ------------------------------------------------------------- | ------ | -------------------------------------------------------- |
| register | `name` (string) - The tag name to register the element under. |        | Registers the element with the browser under a tag name. |
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
<auro-toast style="display: block; margin: 0.5rem 0;" id="basicToast">
    Default notification with no error type.
</auro-toast>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

<pre class="language-html"><code class="language-html">&lt;auro-button id="basicToastBtn"&gt;
  Show default notification
&lt;/auro-button&gt;
&#10;&lt;!--
NOTE: The manually added style is NOT necessary for use,
Demo purposes ONLY!
--&gt;
&lt;auro-toast style="display: block; margin: 0.5rem 0;" id="basicToast"&gt;
  Default notification with no error type.
&lt;/auro-toast&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Property and attribute examples

### Disable auto hide

Use the `disableAutoHide` attribute to prevent the toast from automatically dismissing itself.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/disable-auto-hide.html) -->
<!-- The below content is automatically added from ./../apiExamples/disable-auto-hide.html -->
<auro-button id="disableHideToastBtn">
    Show default notification
</auro-button>
<auro-toast disableAutoHide style="display: block; margin: 0.5rem 0;" id="disableHideToast">
    Default notification with no error type.
</auro-toast>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/disable-auto-hide.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/disable-auto-hide.html -->

<pre class="language-html"><code class="language-html">&lt;auro-button id="disableHideToastBtn"&gt;
  Show default notification
&lt;/auro-button&gt;
&#10;&lt;auro-toast disableAutoHide style="display: block; margin: 0.5rem 0;" id="disableHideToast"&gt;
  Default notification with no error type.
&lt;/auro-toast&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### No icon

Use the `noIcon` attribute to hide the icon.

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

<pre class="language-html"><code class="language-html">&lt;auro-button id="noIconBtn"&gt; Show toast with no icon &lt;/auro-button&gt;
&lt;auro-toast id="noIcon" noIcon style="display: block; margin: 0.5rem 0;"&gt; Default toast. &lt;/auro-toast&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Time until hide

Use the `timeTilHide` attribute to set how long, in milliseconds, the toast stays visible before it hides. The default is `5000`. Error toasts and toasts with `disableAutoHide` never hide on their own.

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

<pre class="language-html"><code class="language-html">&lt;auro-button id="timeTilHideToastBtn"&gt;
  Show default notification
&lt;/auro-button&gt;
&lt;auro-toast timeTilHide="1000" style="display: block; margin: 0.5rem 0;" id="timeTilHideToast"&gt;
  Default notification with no error type.
&lt;/auro-toast&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Variant

Use `variant` to set the toast's color and icon: `success`, `error`, or `custom`. Any other value shows an information icon.

**Note:** Error toasts never hide on their own, even when `timeTilHide` is set. They stay open until someone closes them.

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

<pre class="language-html"><code class="language-html">&lt;auro-button id="defaultVariantBtn"&gt;
  Show default toast
&lt;/auro-button&gt;
&lt;auro-toast id="defaultVariant" style="display: block; margin: 0.5rem 0;"&gt;
  Default toast.
&lt;/auro-toast&gt;
&#10;&lt;auro-button id="errorVariantBtn"&gt;
  Show error toast
&lt;/auro-button&gt;
&lt;auro-toast id="errorVariant" variant="error" style="display: block; margin: 0.5rem 0;"&gt;
  Unable to add lap infant. Please try again.
&lt;/auro-toast&gt;
&#10;&lt;auro-button id="successVariantBtn"&gt;
  Show success toast
&lt;/auro-button&gt;
&lt;auro-toast id="successVariant" variant="success" style="display: block; margin: 0.5rem 0;"&gt;
  Successfully added lap infant.
&lt;/auro-toast&gt;</code></pre>
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
  style="--ds-auro-toast-container-color: var(--ds-color-background-info-default); --ds-auro-toast-text-color: var(--ds-color-text-primary-default); display: block; margin: 0.5rem 0;">
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

<pre class="language-html"><code class="language-html">&lt;!-- icon variant --&gt;
&lt;auro-button id="customizedToastBtn"&gt;
  Show customized notification
&lt;/auro-button&gt;
&lt;auro-toast
  id="customizedToast"
  variant="custom"
  visible
  disableAutoHide
  style="--ds-auro-toast-container-color: var(--ds-color-background-info-default); --ds-auro-toast-text-color: var(--ds-color-text-primary-default); display: block; margin: 0.5rem 0;"&gt;
  Did you know you can create a price alert for this route?
  &lt;br /&gt;
  &lt;auro-button variant="tertiary"&gt;Create Alert&lt;/auro-button&gt;
  &lt;svg slot="customSvg" aria-labelledby="pin-trip-filled__desc" class="ico_squareLarge" role="img" viewBox="0 0 24 24" style="min-width: var(--auro-size-lg, var(--ds-size-300, 1.5rem)); height: var(--auro-size-lg, var(--ds-size-300, 1.5rem)); fill: currentcolor;"&gt;&lt;title&gt;&lt;/title&gt;&lt;desc id="pin-trip-filled__desc"&gt;drop pin with circles.&lt;/desc&gt;&lt;path d="M10.045 3.345a.75.75 0 0 1 .785-.714l.05.003a.75.75 0 0 1-.082 1.498l-.04-.002a.75.75 0 0 1-.713-.785m-1.217.22a.75.75 0 0 1-.357 1l-.034.016a.75.75 0 0 1-.655-1.35l.047-.022a.75.75 0 0 1 .999.357m3.949.186a.75.75 0 0 1 1.012-.318l.045.023a.75.75 0 0 1-.703 1.326l-.035-.019a.75.75 0 0 1-.319-1.012M6.508 5.057a.75.75 0 0 1 .2 1.041l-.01.017a.75.75 0 1 1-1.246-.836l.014-.022a.75.75 0 0 1 1.042-.2m8.577.22a.75.75 0 0 1 1.038.218l.028.044a.75.75 0 0 1-1.264.808l-.02-.032a.75.75 0 0 1 .218-1.038m6.02 7.014c0-2.789-2.44-4.88-4.88-4.88s-4.881 2.091-4.881 4.88q0 2.559 4.11 8.496l.199.285.055.068a.697.697 0 0 0 1.088-.068q4.31-6.16 4.309-8.781m-6.275 0a1.394 1.394 0 1 1 2.789 0 1.394 1.394 0 0 1-2.789 0M4.635 10.704a1.74 1.74 0 1 0 0-3.48 1.74 1.74 0 0 0 0 3.48"&gt;&lt;/path&gt;&lt;/svg&gt;
&lt;/auro-toast&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Visible

Add the `visible` attribute to show the toast. The toast removes it when it closes.

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

<pre class="language-html"><code class="language-html">&lt;auro-button id="visibleToastBtn"&gt;
  Set visible to true
&lt;/auro-button&gt;
&lt;auro-toast id="visibleToast" style="display: block; margin: 0.5rem 0;"&gt;
  Default toast.
&lt;/auro-toast&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Focus management with `trigger` and `triggerElement`

When someone closes a toast with the close button, focus returns to the element that opened it. Use the `trigger` attribute to set the `id` of that element, or the `triggerElement` property to pass the element itself. When both are set, `trigger` takes precedence. If no element has that `id`, the toast uses `triggerElement`.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/trigger.html) -->
<!-- The below content is automatically added from ./../apiExamples/trigger.html -->
<p>Use the <code>trigger</code> attribute to pass the <code>id</code> of the element that opened the toast. When someone closes the toast with its close button, focus returns to that element.</p>
<auro-button id="triggerAttrBtn">
    Show notification
</auro-button>
<!--
  NOTE: The manually added style is NOT necessary for use,
  Demo purposes ONLY!
  -->
<auro-toast style="display: block; margin: 0.5rem 0;" id="triggerAttrToast" trigger="triggerAttrBtn" disableAutoHide>
    Flight booked successfully.
</auro-toast>
<p>Use the <code>triggerElement</code> property to pass a direct reference to the element that opened the toast. Useful when an <code>id</code> is not available or when working programmatically.</p>
<auro-button id="triggerPropBtn">
    Show notification
</auro-button>
<auro-toast style="display: block; margin: 0.5rem 0;" id="triggerPropToast" disableAutoHide>
    Flight booked successfully.
</auro-toast>
<p>When both <code>trigger</code> and <code>triggerElement</code> are set, <code>trigger</code> takes precedence. In this example, <code>triggerElement</code> points to the second button but <code>trigger</code> points to the first, so focus returns to the first button on close.</p>
<auro-button id="triggerPrecedenceBtn1">
    Button 1 (<code>trigger</code> attribute target)
</auro-button>
<auro-button id="triggerPrecedenceBtn2">
    Button 2 (<code>triggerElement</code> target, ignored)
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

<pre class="language-html"><code class="language-html">&lt;p&gt;Use the &lt;code&gt;trigger&lt;/code&gt; attribute to pass the &lt;code&gt;id&lt;/code&gt; of the element that opened the toast. When someone closes the toast with its close button, focus returns to that element.&lt;/p&gt;
&#10;&lt;auro-button id="triggerAttrBtn"&gt;
  Show notification
&lt;/auro-button&gt;
&#10;&lt;!--
NOTE: The manually added style is NOT necessary for use,
Demo purposes ONLY!
--&gt;
&lt;auro-toast style="display: block; margin: 0.5rem 0;" id="triggerAttrToast" trigger="triggerAttrBtn" disableAutoHide&gt;
  Flight booked successfully.
&lt;/auro-toast&gt;
&#10;&lt;p&gt;Use the &lt;code&gt;triggerElement&lt;/code&gt; property to pass a direct reference to the element that opened the toast. Useful when an &lt;code&gt;id&lt;/code&gt; is not available or when working programmatically.&lt;/p&gt;
&#10;&lt;auro-button id="triggerPropBtn"&gt;
  Show notification
&lt;/auro-button&gt;
&#10;&lt;auro-toast style="display: block; margin: 0.5rem 0;" id="triggerPropToast" disableAutoHide&gt;
  Flight booked successfully.
&lt;/auro-toast&gt;
&#10;&lt;p&gt;When both &lt;code&gt;trigger&lt;/code&gt; and &lt;code&gt;triggerElement&lt;/code&gt; are set, &lt;code&gt;trigger&lt;/code&gt; takes precedence. In this example, &lt;code&gt;triggerElement&lt;/code&gt; points to the second button but &lt;code&gt;trigger&lt;/code&gt; points to the first, so focus returns to the first button on close.&lt;/p&gt;
&#10;&lt;auro-button id="triggerPrecedenceBtn1"&gt;
  Button 1 (&lt;code&gt;trigger&lt;/code&gt; attribute target)
&lt;/auro-button&gt;
&#10;&lt;auro-button id="triggerPrecedenceBtn2"&gt;
  Button 2 (&lt;code&gt;triggerElement&lt;/code&gt; target, ignored)
&lt;/auro-button&gt;
&#10;&lt;auro-toast style="display: block; margin: 0.5rem 0;" id="triggerPrecedenceToast" trigger="triggerPrecedenceBtn1" disableAutoHide&gt;
  Flight booked successfully.
&lt;/auro-toast&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/trigger.js) -->
<!-- The below code snippet is automatically added from ./../apiExamples/trigger.js -->

<pre class="language-js"><code class="language-js">/* eslint-disable jsdoc/require-jsdoc */
&#10;export function initTriggerExample() {
  // trigger attribute — pass element id as a string
  const attrBtn = document.querySelector("#triggerAttrBtn");
  const attrToast = document.querySelector("#triggerAttrToast");
&#10;  attrBtn.addEventListener("click", () =&gt; {
    if (!attrToast.hasAttribute("visible")) {
      attrToast.setAttribute("visible", true);
    }
  });
&#10;  // triggerElement property — pass a direct element reference
  const propBtn = document.querySelector("#triggerPropBtn");
  const propToast = document.querySelector("#triggerPropToast");
&#10;  propBtn.addEventListener("click", () =&gt; {
    if (!propToast.hasAttribute("visible")) {
      propToast.triggerElement = propBtn;
      propToast.setAttribute("visible", true);
    }
  });
&#10;  // precedence — trigger attribute wins over triggerElement when both are set
  const precedenceBtn1 = document.querySelector("#triggerPrecedenceBtn1");
  const precedenceBtn2 = document.querySelector("#triggerPrecedenceBtn2");
  const precedenceToast = document.querySelector("#triggerPrecedenceToast");
&#10;  precedenceBtn1.addEventListener("click", () =&gt; {
    if (!precedenceToast.hasAttribute("visible")) {
      precedenceToast.triggerElement = precedenceBtn2;
      precedenceToast.setAttribute("visible", true);
    }
  });
&#10;  precedenceBtn2.addEventListener("click", () =&gt; {
    if (!precedenceToast.hasAttribute("visible")) {
      precedenceToast.triggerElement = precedenceBtn2;
      precedenceToast.setAttribute("visible", true);
    }
  });
}</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Common usage patterns

### Multiple toasts

Use `<auro-toaster>` to show several toasts at once. It displays them at the bottom of the screen.

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

<pre class="language-html"><code class="language-html">&lt;auro-button id="multiToastBtn-default"&gt;Show default toast&lt;/auro-button&gt;
&lt;auro-button id="multiToastBtn-error"&gt;Show error toast&lt;/auro-button&gt;
&lt;auro-button id="multiToastBtn-success"&gt;Show success toast&lt;/auro-button&gt;
&#10;&lt;auro-toaster&gt;
  &lt;auro-toast id="multiToast-default"&gt;Default toast.&lt;/auro-toast&gt;
  &lt;auro-toast id="multiToast-error" variant="error"&gt;Unable to add lap infant. Please try again.&lt;/auro-toast&gt;
  &lt;auro-toast id="multiToast-success" variant="success"&gt;Successfully added lap infant.&lt;/auro-toast&gt;
&lt;/auro-toaster&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Dynamic toasts

Use `<auro-toaster>` to add toasts with JavaScript while the page runs. It displays them at the bottom of the screen and announces them to screen readers. To add toasts without `<auro-toaster>`, see the next section.

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

<pre class="language-html"><code class="language-html">&lt;auro-button id="dynamicToastBtn-default"&gt;Show default toast&lt;/auro-button&gt;
&lt;auro-button id="dynamicToastBtn-error"&gt;Show error toast&lt;/auro-button&gt;
&lt;auro-button id="dynamicToastBtn-success"&gt;Show success toast&lt;/auro-button&gt;
&#10;&lt;auro-toaster id="dynamicToaster"&gt;
&#10;&lt;/auro-toaster&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/dynamic-toasts.js) -->
<!-- The below code snippet is automatically added from ./../apiExamples/dynamic-toasts.js -->

<pre class="language-js"><code class="language-js">/* eslint-disable jsdoc/require-jsdoc */
&#10;const toastDefs = [
  { id: "dynamicToast-default", variant: null, message: "Default toast.", btnId: "dynamicToastBtn-default" },
  { id: "dynamicToast-error", variant: "error", message: "Unable to add lap infant. Please try again.", btnId: "dynamicToastBtn-error" },
  { id: "dynamicToast-success", variant: "success", message: "Successfully added lap infant.", btnId: "dynamicToastBtn-success" },
];
&#10;// simple in-memory registry of active toasts
const activeToasts = new Map();
&#10;function generateToastId(baseId) {
  return `${baseId}-${crypto.randomUUID()}`;
}
&#10;export function initDynamicToastsExample() {
  const toaster = document.querySelector("#dynamicToaster");
&#10;  toastDefs.forEach(({ id: baseId, variant, message, btnId }) =&gt; {
    document.querySelector(`#${btnId}`).addEventListener("click", () =&gt; {
      const toast = document.createElement("auro-toast");
&#10;      const toastId = generateToastId(baseId);
&#10;      toast.id = toastId;
&#10;      if (variant) {
        toast.setAttribute("variant", variant);
      }
&#10;      toast.setAttribute("visible", true);
      toast.textContent = message;
&#10;      toaster.appendChild(toast);
&#10;      // 👇 now the ID is actually used meaningfully
      activeToasts.set(toastId, toast);
&#10;      console.log("Toast added:", toastId);
&#10;      // optional cleanup if your component doesn't auto-remove itself
      toast.addEventListener("toast-close", () =&gt; {
        activeToasts.delete(toastId);
      });
    });
  });
}</code></pre>
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
<!-- The below content is automatically added from ./../apiExamples/standalone-toast.html -->
<auro-button id="standaloneToastBtn">Show toast</auro-button>
<div id="standaloneContainer" aria-live="polite" aria-atomic="false"></div>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/standalone-toast.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/standalone-toast.html -->

<pre class="language-html"><code class="language-html">&lt;auro-button id="standaloneToastBtn"&gt;Show toast&lt;/auro-button&gt;
&#10;&lt;div id="standaloneContainer" aria-live="polite" aria-atomic="false"&gt;&lt;/div&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/standalone-toast.js) -->
<!-- The below code snippet is automatically added from ./../apiExamples/standalone-toast.js -->

<pre class="language-js"><code class="language-js">/* eslint-disable jsdoc/require-jsdoc */
&#10;export function initStandaloneToastExample() {
  const container = document.querySelector("#standaloneContainer");
&#10;  document.querySelector("#standaloneToastBtn").addEventListener("click", () =&gt; {
    const toast = document.createElement("auro-toast");
    toast.setAttribute("visible", "");
    toast.setAttribute("variant", "success");
    toast.textContent = "Successfully added lap infant";
    container.appendChild(toast);
  });
}</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Restyle with CSS custom properties

Restyle the component by changing the values of the following custom properties.

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

<pre class="language-scss"><code class="language-scss">@use "@aurodesignsystem/design-tokens/dist/themes/alaska/SCSSVariables--alaska" as v;
&#10;:host {
  --ds-auro-toast-close-button-hover-container-color: var(--ds-advanced-color-button-tertiary-background-hover, #{v.$ds-advanced-color-button-tertiary-background-hover});
  --ds-auro-toast-container-color: var(--ds-advanced-color-shared-background-strong, #{v.$ds-advanced-color-shared-background-strong});
  --ds-auro-toast-icon-color: var(--ds-basic-color-texticon-inverse, #{v.$ds-basic-color-texticon-inverse});
  --ds-auro-toast-text-color: var(--ds-basic-color-texticon-inverse, #{v.$ds-basic-color-texticon-inverse});
}</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
