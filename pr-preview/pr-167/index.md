<!--
 THIS PAGE'S CONTENT SHOULD BE KEPT MINIMAL.
 ONLY ADD EXAMPLES THAT ARE TRULY NECESSARY FOR THE INDEX PAGE. THE BASIC EXAMPLE IS USUALLY ENOUGH.
 ALL OTHER EXAMPLES SHOULD GO IN THE API DOCUMENTATION.
-->

# Toast

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/description.md) -->
<!-- The below content is automatically added from ./../docs/partials/description.md -->
Use `<auro-toast>` to show a short, temporary message, such as a confirmation or an error.

Use `<auro-toaster>` to stack several toasts at the bottom of the screen.
<!-- AURO-GENERATED-CONTENT:END -->

## Use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./../docs/partials/useCases.md -->
Use `<auro-toast>` to:

* Confirm that an action worked, with the `success` variant.
* Tell someone that something went wrong, with the `error` variant.
* Share any other short message, such as a reminder or tip.
<!-- AURO-GENERATED-CONTENT:END -->

## The setup
To show a toast, set its `visible` attribute. The following example shows one way to do it.

<pre class="language-js"><code class="language-js">showToast = (toastID) =&gt; {
  const toast = document.querySelector(toastID);
&#10;  if (!toast.hasAttribute('visible')) {
    toast.setAttribute('visible', true);
  }
};</code></pre>

## Examples

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
