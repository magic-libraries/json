# ${title}

this is the
[@magic-libraries](https://github.com/magic-libraries)
json library. it returns errors instead of throwing them
and catches (some) malformed objects when stringifying.

<GitBadges>@magic-libraries/json</GitBadges>

### installation

`npm install @magic-libraries/json`

### usage

in a page/component, just use the lib.json functions

`lib.json.stringify({ some: { object: ['with', 'values'] } })`

renders

`{ "some": { "object": ["with", "values"] } }`

### caveat

this library is intended to handle incoming web traffic.
we can never be sure that this incoming packets will not include faulty json.

to use this library without checking it's return value
your input json [MUST](https://datatracker.ietf.org/doc/html/rfc2119#section-1) be wellformed.

in all (other) cases the following pattern should be employed
(and enhanced with custom error messages).

```
export const ViewStringify = unsafe => {
  const result = lib.json.stringify(unsafe)
  return div([result.message ? result.message : result])
}

export const ViewParse = unsafe => {
  const result = lib.json.parse(unsafe)
  // in this case we can not check for .message,
  // since unsafe might have a .message key after parsing
  div([result instanceof Error ? result.message : result])
}
```

### example modules

the example/assets directory contains two modules that use the lib.json functions:

`<JsonStringify state></JsonStringify>`

renders

<JsonStringify state></JsonStringify>

`<JsonParse>{ &quot;valid&quot;: true }</JsonParse>`

renders

<JsonParse>{ "valid": true }</JsonParse>

### source

the source for this page is in the
[example directory](https://github.com/magic-libraries/json/tree/master/example)
and gets built and published to github using
[@magic/core](https://github.com/magic/core)
