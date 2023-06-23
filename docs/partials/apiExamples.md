<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Property Examples

#### visible

State of the toast which determines if it is visible.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/visible.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```js 
showToast = (toastID) => {
  const toast = document.querySelector(toastID);

  if (!toast.hasAttribute('visible')) {
    toast.setAttribute('visible', true);
  }
};
```
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/visible.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### variant

What the component will render visually based on which variant value is set; currently supports `error`, `success`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/variant.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/variant.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### noIcon

If set, no icon will be visible on the toast.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/noIcon.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/noIcon.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
