export const View = state => [
  h2(state.title),

  p([
    'this is the ',
    Link({ to: 'https://github.com/magic-libraries' }, '@magic-libraries'),
    ' json library. it returns errors instead of throwing them',
    ' and catches (some) malformed objects when stringifying.',
  ]),

  GitBadges('magic-libraries/json'),

  h3({ id: 'installation' }, 'installation:'),
  Pre('npm install @magic-libraries/json'),

  h3({ id: 'usage' }, 'usage:'),
  p('in a page/component, just use the lib.json functions'),
  Pre("module.exports = () => Pre(lib.json.stringify({ some: { object: ['with', 'values'] } }))"),
  p('renders'),
  Pre(lib.json.stringify({ some: { object: ['with', 'values'] } })),

  h3({ id: 'caveat' }, 'caveat'),
  p([
    'this library is intended to handle incoming web traffic.',
    ' we can never be sure that this incoming packets will not include faulty json.'
  ]),
  p([
    "only use this library without checking it's return value",
    ' if you know that your input json is not malformed.',
    ' in all other cases the following pattern should be employed ',
    ' (and enhanced with custom error messages).',
  ]),

  Pre(`
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
`),

  h3({ id: 'source' }, 'source'),
  p([
    'the source for this page is in the ',
    Link(
      { to: 'https://github.com/magic-libraries/json/tree/master/example' },
      'example directory',
    ),
    ' and gets built and published to github using ',
    Link({ to: 'https://github.com/magic/core' }, '@magic/core'),
  ]),
]
