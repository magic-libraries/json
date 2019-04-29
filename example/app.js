module.exports = {
  state: {
    logo: '/img/logo.png',
    logotext: 'json',
    menu: [
      { to: '/#installation', text: 'installation' },
      { to: '/#require', text: 'require' },
      { to: '/#usage', text: 'usage' },
      { to: '/#caveat', text: 'caveat' },
      { to: '/#source', text: 'source' },
    ],
  },
  lib: {
    JSON: require.resolve('../src'),
  },
}
