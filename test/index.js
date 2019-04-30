const { tryCatch, is } = require('@magic/test')
const { parse, stringify } = require('../src')

const workingObject = { key: 'value', key2: 'value2' }
const workingString = stringify(workingObject)
const broken = `{"key": "value", 'key2': "value"}`

const brokenObject = []
brokenObject.broken = 'yes'
brokenObject.brokenToo = brokenObject.broken
brokenObject.brokenToo.broken = brokenObject.brokenToo

module.exports = {
  parse: [
    {
      fn: parse(workingString),
      expect: is.deep.equal(workingObject),
      info: 'successfully parses well formed object',
    },
    { fn: tryCatch(parse, broken), expect: is.error, info: 'returns error if string is broken' },
  ],
  stringify: [
    {
      fn: stringify(workingObject),
      expect: workingString,
      info: 'successfully stringifies well formed object',
    },
    {
      fn: stringify(brokenObject),
      expect: is.error,
      info: 'returns error if object is broken after serialization',
    },
  ],
}
