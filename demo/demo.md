<!--
The demo.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/demo.md`
-->

# Toast

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./description.md) -->
<!-- The below content is automatically added from ./description.md -->
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./description.md) -->
<!-- The below content is automatically added from ./description.md -->
`<auro-toast>` is a [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for the purpose of illustrating toast messages to Alaska customers.
<!-- AURO-GENERATED-CONTENT:END -->

## auro-toast use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./useCases.md) -->
<!-- The below content is automatically added from ./useCases.md -->
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./useCases.md) -->
<!-- The below content is automatically added from ./useCases.md -->
The `<auro-toast>` use cases include:

* Error toast
* Success toast
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:END -->

## auro-toast default use

The following illustrates the default use of the auro-toast element.
<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
<!-- The below content is automatically added from ./../../apiExamples/basic.html -->
<auro-button onClick="toggleToast('auro-toast')">Show default toast</auro-button>
<auro-toast>Toast content goes here.</auro-toast>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
<auro-button onClick="toggleToast('auro-toast')">Show default toast</auro-button>
<auro-toast>Toast content goes here.</auro-toast>
```

</auro-accordion>

## Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom clement. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-toast` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `registerComponent(name)` method and pass in a unique name.

```js
import './node_modules/@alaskaairux/auro-toast';
registerComponent('custom-toast');
```

This will create a new custom element that you can use in your HTML that will function identically to the `auro-toast` element.

<div class="exampleWrapper">
  <custom-toast>Salutations World!</custom-toast>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
  ```html
  <custom-toast>Salutations World!</custom-toast>
  ```

</auro-accordion>
