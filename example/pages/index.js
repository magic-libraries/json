module.exports = () => [
  h2('@magic-libraries/json'),
  p([
    'this is the ',
    Link({ to: 'https://github.com/magic-libraries' }, '@magic-libraries'),
    ' json library. it returns errors instead of throwing them',
    ' and catches (some) malformed objects when stringifying.',
  ]),

  GitBadges({
    project: 'magic-libraries/json',
    appveyor: 'jaeh/json',
  }),

  h3({ id: 'installation' }, 'installation:'),
  p([
    'installation is done using npm. ',
    ' for now, all magic modules are living on github and not on npm.',
  ]),
  p('note the missing @ before magic-libraries.'),
  p('this is how we install npm modules from github.'),

  Pre('npm install magic-libraries/json'),

  h3({ id: 'require' }, 'require:'),
  p('first add the client lib to the app.lib, note that we do not actually require the library.'),
  Pre(`
// /app.js
module.exports = {
  //...other app exports
  lib: {
    JSON: '@magic-libraries/json',
  },
}`),

  h3({ id: 'usage' }, 'usage:'),
  p('in a page/component, just use the LIB.JSON functions'),
  Pre(
    "module.exports = () => Pre(LIB.JSON.stringify({ some: { object: ['with', 'values'] } }))",
  ),
  p('renders'),
  Pre(LIB.JSON.stringify({ some: { object: ['with', 'values'] } })),

  h3({ id: 'caveat' }, 'caveat'),
  p([
    "only use this library without checking it's return value",
    ' if you know that your input json is not malformed.',
    ' in all other cases the following pattern should be employed (and enhanced with custom error messages).',
  ]),

  Pre(`
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
`),

  h3({ id: 'source' }, 'source'),
  p([
    'the source for this page is in the ',
    Link({ to: 'https://github.com/magic-libraries/json/tree/master/example' }, 'example directory'),
    ' and gets built and published to github using ',
    Link({ to: 'https://github.com/magic/core' }, '@magic/core'),
  ]),
]
