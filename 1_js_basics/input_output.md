## Input and Output

### Using prompt() to Get User's Input
`prompt()` pops up a dialog box with an optional message, you can use this method to collect user input.

The following from your browser's JavaScript console:

```js
var name = prompt('What is your name?');
var guess = prompt(); // blank prompt window
```

The dialog lets the user input some text and click OK or Cancel.

If user clicks `OK`, `prompt()` returns the text as a string, if not, it returns `null`.

It's important to note `prompt()` captures user's input as a string.

If user's input is the number 1, `prompt()` returns the string `"1"`. You must perform the conversion yourself if the value is a number.

### Using alert()
`alert()` displays a dialog with a message and `OK` button.

Clicking `OK` dismisses the dialog.
