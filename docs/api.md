# auro-toast

Shows a short, temporary message, such as a confirmation or an error.

**Key capabilities**
- **Success and error styles**: Set `variant` to `success` or `error` to change the color and icon, or to `custom` to show your own icon.
- **Hides on its own**: The toast hides after five seconds, except error toasts, which stay open until someone closes them; use `timeTilHide` to change the time or `disableAutoHide` to keep any toast open.
- **Returns focus**: Set `trigger` or `triggerElement` to send focus back to the element that opened the toast when someone closes the toast with its close button.
- **Stacks with other toasts**: Wrap toasts in `auro-toaster` to stack them at the bottom of the screen.

**Example**
```html
<auro-toast visible>Your changes were saved.</auro-toast>
```

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

### Slots

| Name      | Description                                                                                        |
| --------- | -------------------------------------------------------------------------------------------------- |
| (default) | The message shown in the toast.                                                                    |
| customSvg | The icon to show with `variant="custom"`. Give a meaningful icon a description for screen readers. |

### CSS shadow parts

| Name         | Description                                                            |
| ------------ | ---------------------------------------------------------------------- |
| close-button | The button that closes the toast.                                      |
| type-icon    | The icon at the start of the toast. Not rendered when `noIcon` is set. |

### CSS custom properties

| Name                                               | Description                                                     |
| -------------------------------------------------- | --------------------------------------------------------------- |
| --ds-auro-toast-container-color                    | Background color of the toast.                                  |
| --ds-auro-toast-text-color                         | Color of the message text.                                      |
| --ds-auro-toast-icon-color                         | Color of the icon at the start of the toast.                    |
| --ds-auro-toast-close-button-hover-container-color | Background color of the close button when a pointer is over it. |

# auro-toaster

Shows `auro-toast` elements in a stack fixed to the bottom of the screen and announces them to screen readers.

**Key capabilities**
- **Stacks toasts**: Fixes the toasts to the bottom of the screen, so they stay in view while the page scrolls.
- **Announces toasts**: Screen readers announce each toast politely, and error toasts are announced right away.

**Example**
```html
<auro-toaster>
  <auro-toast visible>Your changes were saved.</auro-toast>
</auro-toaster>
```

### Methods

| Name     | Parameters                                                    | Return | Description                                              |
| -------- | ------------------------------------------------------------- | ------ | -------------------------------------------------------- |
| register | `name` (string) - The tag name to register the element under. |        | Registers the element with the browser under a tag name. |

### Slots

| Name      | Description                                                     |
| --------- | --------------------------------------------------------------- |
| (default) | The `auro-toast` elements to stack at the bottom of the screen. |