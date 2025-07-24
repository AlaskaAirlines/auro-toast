# auro-toast

The auro-toast element provides users a way to display short, temporary messages.

## Properties

| Property          | Attribute         | Type      | Description                                      |
|-------------------|-------------------|-----------|--------------------------------------------------|
| `disableAutoHide` | `disableAutoHide` | `Boolean` | Prevents the toast from auto-hiding on the default time. |
| `noIcon`          | `noIcon`          | `Boolean` | Removes icon from the toast UI                   |
| `timeTilHide`     | `timeTilHide`     | `Number`  | Sets the time in milliseconds until the toast hides. |
| `variant`         | `variant`         | `String`  | Component will render visually based on which variant value is set; currently supports `error`, `success`, `custom` |
| `visible`         | `visible`         | `Boolean` | Sets state of toast to visible                   |

## Events

| Event          | Type     | Description                             |
|----------------|----------|-----------------------------------------|
| `onToastClose` | `object` | Notifies that the toast has been closed |

## CSS Shadow Parts

| Part           | Description                         |
|----------------|-------------------------------------|
| `close-button` | Apply css to the toast close button |
| `type-icon`    | Apply css to the toast type icon    |
