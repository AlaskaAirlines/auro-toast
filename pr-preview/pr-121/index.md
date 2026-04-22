<!--
 THIS PAGE'S CONTENT SHOULD BE KEPT MINIMAL.
 ONLY ADD EXAMPLES THAT ARE TRULY NECESSARY FOR THE INDEX PAGE — THE BASIC EXAMPLE IS USUALLY ENOUGH.
 ALL OTHER EXAMPLES SHOULD GO IN THE API DOCUMENTATION.
-->

# Toast

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/description.md) -->
<!-- The below content is automatically added from ./../docs/partials/description.md -->
The `<auro-toast>` element is a [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for the purpose of sending an unobtrusive toast (or push) notification to your visitors.

The `<auro-toaster>` wrapper-element is a [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for the purpose of managing a series of notifications  at the bottom of the screen using the `<auro-toast>` element.
<!-- AURO-GENERATED-CONTENT:END -->

## Use Cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./../docs/partials/useCases.md -->
The `<auro-toast>` use cases include:

* Sending an error push notification
* Sending a success push notification
* Sending any type of push notification
<!-- AURO-GENERATED-CONTENT:END -->

## The setup
Triggering the toasts relies on setting the `visible` property to `true`. See the following example to see how this code is used in an example.

```js
showToast = (toastID) => {
  const toast = document.querySelector(toastID);

  if (!toast.hasAttribute('visible')) {
    toast.setAttribute('visible', true);
  }
};
```

## Example(s)

### Basic

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

```html
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
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
