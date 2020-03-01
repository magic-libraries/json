# ${state.title}

this is the
[@magic-libraries](https://github.com/magic-libraries)
json library. it returns errors instead of throwing them
and catches (some) malformed objects when stringifying.

<GitBadges>magic-libraries/json</GitBadges>

<h3 id="installation">installation</h3>

<Pre>npm install @magic-libraries/json</Pre>

<h3 id="usage">usage</h3>

in a page/component, just use the lib.json functions

<Pre>
&lt;Pre>&#36;{lib.json.stringify({ some: { object: ['with', 'values'] } })}&lt;/Pre>
</Pre>

renders

<Pre>{ some: { object: ["with", "values"] } }</Pre>

<h3 id="caveat">caveat</h3>

this library is intended to handle incoming web traffic.
we can never be sure that this incoming packets will not include faulty json.

only use this library without checking it's return value
if you know that your input json is not malformed.
in all other cases the following pattern should be employed
(and enhanced with custom error messages).

<Pre>
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
</Pre>

<h3 id="source">source</h3>

the source for this page is in the
[example directory](https://github.com/magic-libraries/json/tree/master/example)
and gets built and published to github using
[@magic/core](https://github.com/magic/core)
