# auro-toast

The `auro-toast` element provides users a way to display short, temporary messages.

### Properties & Attributes

| Properties      | Attributes      | Modifiers | Type                             | Default | Description                                                         |
| --------------- | --------------- | --------- | -------------------------------- | ------- | ------------------------------------------------------------------- |
| disableAutoHide | disableAutoHide |           | boolean                          |         | Prevents the toast from auto-hiding on the default time.            |
| noIcon          | noIcon          |           | boolean                          |         | Removes icon from the toast UI.                                     |
| timeTilHide     | timeTilHide     |           | number                           |         | Sets the time in milliseconds until the toast hides.                |
| variant         | variant         |           | `error` \| `success` \| `custom` |         | Component will render visually based on which variant value is set. |
| visible         | visible         |           | boolean                          |         | Sets state of toast to visible                                      |

### Methods

| Name     | Parameters                                                           | Return | Description                                       |
| -------- | -------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of the element that you want to register. |        | This will register this element with the browser. |

### Events

| Name         | Description                             |
| ------------ | --------------------------------------- |
| onToastClose | Notifies that the toast has been closed |

### CSS Shadow Parts

| Name         | Description                         |
| ------------ | ----------------------------------- |
| close-button | Apply css to the toast close button |
| type-icon    | Apply css to the toast type icon    |