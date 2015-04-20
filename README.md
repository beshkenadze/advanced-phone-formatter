# advanced-phone-formatter

  Micro module for advanced phone formating

## Status

[![npm version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]

## Instalation

```sh
$ npm install advanced-phone-formatter
```

## Use

```js
var apf = require('advanced-phone-formatter')

apf("89211234567", {"region": "RU"})
// +7 921 123-45-67

apf("1800MYAPPLE")
// +1 800-692-7753
```

## License

  MIT
  
[npm-image]: https://img.shields.io/npm/v/advanced-phone-formatter.svg?style=flat-square
[npm-url]: https://npmjs.org/package/advanced-phone-formatter
[travis-image]: https://travis-ci.org/beshkenadze/advanced-phone-formatter.svg?style=flat-square&branch=0.1.1
[travis-url]: https://travis-ci.org/beshkenadze/advanced-phone-formatter
