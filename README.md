# regexp-match

Utility function to make sure `String.prototype.match` always returns an array.
Also implicitly casts the value to be checked against to a string.

### Native:

```js
const matches = str.match(/Number (\d+)/);
// Get the number in the brackets
let num = matches && matches[1];
```

### With regexp-match:

```js
const match = require('regexp-match');
//...

let num = match(str, /Number (\d+)/)[1];

```
