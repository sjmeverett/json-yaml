# json-yaml

This package allows you to parse a string or read a file without caring whether it is JSON or YAML.


## Installation

You can install this package via NPM:

    $ npm install --save json-yaml


## Usage

Using the package is simple.  If you want to parse a string, use it like so:

```js
var jsonYaml = require('json-yaml');
var config1 = jsonYaml('{foo: 1, bar: 2}');
var config2 = jsonYaml('key: value\nkey2: value2');
```

The string can contain comments and they will be ignored.

There are also two helper functions included for reading files synchronously and asynchronously:

```js
var jsonYaml = require('json-yaml');
var config1 = jsonYaml.readFileSync('config.json', 'utf-8');

jsonYaml.readFile('config.yaml', 'utf8', function (err, result) {
  // result is JS object representing parsed file
});
```

These functions have the same signature as their `fs` counterpart, with the caveat that you must provide an encoding or it will die unceremoniously.


## Running the tests

This project uses `mocha`, so run the tests like so:

    $ mocha


## Contributing

I very much welcome pull requests and suggestions, although unfortunately it can sometimes take me a while to respond if I'm busy - apologies.  In lieu of formal guidelines, please try to keep to the same coding style.


## Licence

MIT licence: do what you will.
