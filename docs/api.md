# auro-toast

The auro-toast element provides users a way to display short, temporary messages.

## Properties

| Property  | Attribute | Type      | Description                                      |
|-----------|-----------|-----------|--------------------------------------------------|
| `noIcon`  | `noIcon`  | `Boolean` | Removes icon from the toast UI                   |
| `variant` | `variant` | `String`  | Component will render visually based on which variant value is set; currently supports `error`, `success` |
| `visible` | `visible` | `Boolean` | Sets state of toast to visible                   |

## Events

| Event          | Type     | Description                             |
|----------------|----------|-----------------------------------------|
| `onToastClose` | `object` | Notifies that the toast has been closed |
