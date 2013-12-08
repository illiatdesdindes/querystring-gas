querystring-gas
===============
querystring parser for Google Apps Script. Based on [node-querystring](https://github.com/visionmedia/node-querystring).


Install
-------

fork the repo or use directly this copy of the twilio-gas library in your own project. 
Use the project key:

```
MR5cBNlCtqiePv-dYxg3oBJIg1kW3vbkj
```

## Examples

```js
var qs = require('qs');

qs.parse('user[name][first]=Tobi&user[email]=tobi@learnboost.com');
// => { user: { name: { first: 'Tobi' }, email: 'tobi@learnboost.com' } }

qs.stringify({ user: { name: 'Tobi', email: 'tobi@learnboost.com' }})
// => user[name]=Tobi&user[email]=tobi%40learnboost.com
```
