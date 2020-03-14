## @magic-libraries/json

json client lib for
this is the [@magic](https://magic.github.io/core)-client json library.

it returns errors instead of throwing them and catches (some) malformed objects when stringifying.

[html-docs](https://magic-libraries.github.io/json)

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@magic-libraries/json.svg
[npm-url]: https://www.npmjs.com/package/@magic-libraries/json
[travis-image]: https://img.shields.io/travis/com/magic-libraries/json/master
[travis-url]: https://travis-ci.com/magic-libraries/json
[appveyor-image]: https://img.shields.io/appveyor/ci/magiclibraries/json/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magiclibraries/json/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic-libraries/json/badge.svg
[coveralls-url]: https://coveralls.io/github/magic-libraries/json
[greenkeeper-image]: https://badges.greenkeeper.io/magic-libraries/json.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic-libraries/json.svg
[snyk-image]: https://snyk.io/test/github/magic-libraries/json/badge.svg
[snyk-url]: https://snyk.io/test/github/magic-libraries/json

* [installation](#installation)
* [usage](#usage)
* [caveat](#caveat)
* [demo source](#source)

#### installation
```bash
npm install --save-exact @magic-libraries/json
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

#### caveat
only use this library without checking it's return value
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
[example directory](https://github.com/magic-libraries/json/tree/master/example)
and gets built and published to github using
[@magic/core](https://github.com/magic/core)

#### changelog

##### 0.0.1
first release

##### 0.0.2
* require node 13.5.0

##### 0.0.3
* use @magic-libraries/try-catch

##### 0.0.4 - unreleased
...
