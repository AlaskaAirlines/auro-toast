# auro-toast

The auro-toast element provides users a way to ... (it would be great if you fill this out).

## Attributes

| Attribute | Type      | Description                               |
|-----------|-----------|-------------------------------------------|
| `fixed`   | `Boolean` | Uses fixed pixel values for element shape |

## Properties

| Property  | Attribute | Type      | Description                                      |
|-----------|-----------|-----------|--------------------------------------------------|
| `variant` | `variant` | `String`  | Component will render visually based on which variant value is set; currently supports `error`, `success` |
| `visible` | `visible` | `Boolean` | Sets state of toast to visible                   |

## Events

| Event          | Type                | Description                             |
|----------------|---------------------|-----------------------------------------|
| `onToastClose` | `CustomEvent<this>` | Notifies that the toast has been closed |
