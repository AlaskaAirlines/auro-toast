<!--
 THIS PAGE'S CONTENT SHOULD BE KEPT MINIMAL.
 ONLY ADD EXAMPLES THAT ARE TRULY NECESSARY FOR THE INDEX PAGE — THE BASIC EXAMPLE IS USUALLY ENOUGH.
 ALL OTHER EXAMPLES SHOULD GO IN THE API DOCUMENTATION.
-->

# Toast
 
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/description.md) -->
<!-- AURO-GENERATED-CONTENT:END -->
 
## Use Cases
 
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/useCases.md) -->
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
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
 
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
 
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
 
</auro-accordion>
