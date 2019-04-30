## @magic-client/json

json client lib for
this is the [@magic](https://magic.github.io/core)-client json library.

it returns errors instead of throwing them and catches (some) malformed objects when stringifying.

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@magic-client/json.svg
[npm-url]: https://www.npmjs.com/package/@magic-client/json
[travis-image]: https://api.travis-ci.org/magic-client/json.svg?branch=master
[travis-url]: https://travis-ci.org/magic-client/json
[appveyor-image]: https://img.shields.io/appveyor/ci/jaeh/json/master.svg
[appveyor-url]: https://ci.appveyor.com/project/jaeh/json/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic-client/json/badge.svg
[coveralls-url]: https://coveralls.io/github/magic-client/json
[greenkeeper-image]: https://badges.greenkeeper.io/magic-client/json.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic-client/json.svg
[snyk-image]: https://snyk.io/test/github/magic-client/json/badge.svg
[snyk-url]: https://snyk.io/test/github/magic-client/json

* [installation](#install)
* [require](#require)
* [usage](#usage)
* [caveat](#caveat)
* [caveat](#source)


#### <a name="install"></a>installation
```bash
npm install --save-exact magic-client/json
```

#### <a name="require"></a>require
first add the client lib to the app.lib, note that we do not actually require the library.

```javascript
// /app.js
module.exports = {
  //...other app exports
  lib: {
    JSON: '@magic-client/json',
  },
}
```

#### <a name="usage"></a>usage
in a page/component, just use the LIB.JSON functions
```javascript
module.exports = () =>
  Pre.View(LIB.JSON.stringify({ some: { object: ['with', 'values'] } }))
```
renders
```javascript
LIB.JSON.stringify({ some: { object: ['with', 'values'] } })),
```

#### <a name="caveat"></a>caveat
only use this library without checking it\'s return value
if you know that your input json is not malformed.
in all other cases the following pattern should be employed
(and enhanced with custom error messages).

```javascript
module.exports = {
  ViewStringify: unsafe => {
    const result = LIB.JSON.stringify(unsafe)
    return div([result.message ? result.message : result])
  },
  ViewParse: unsafe => {
    const result = LIB.JSON.parse(unsafe)
    // in this case we can not check for .message,
    // since unsafe might have a .message key after parsing
    div([result instanceof Error ? result.message : result])
  },
}
```

#### <a name="source"></a>source
the source for this page is in the
[example directory](https://github.com/magic-client/json/tree/master/example)
and gets built and published to github using
[@magic/core](https://github.com/magic/core)
