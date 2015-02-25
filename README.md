# find-node-modules-down [![Build Status](https://travis-ci.org/callumacrae/find-node-modules-down.svg)](https://travis-ci.org/callumacrae/find-node-modules-down)

Similar to [find-node-modules] but the other way round. Will find every child
node_modules directory.

## Install

```
$ npm install --save find-node-modules-down
```

## Usage

```js
var findModulesDown = require('find-node-modules-down');

findModulesDown();
//=> ['node_modules', 'something/node_modules', 'something/node_modules/node_modules']

findModulesDown('something');
//=> ['something/node_modules', 'something/node_modules/node_modules']
```

It's very simple.

It will return absolute paths if given an absolute path, or relative paths if
given a relative path (and it defaults to ".").

## License

Released under MIT license.


[find-node-modules]: https://github.com/callumacrae/find-node-modules