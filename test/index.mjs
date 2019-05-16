import { tryCatch, is } from '@magic/test'
import { parse, stringify } from '../src/index.mjs'

const workingObject = { key: 'value', key2: 'value2' }
const workingString = JSON.stringify(workingObject)
const broken = `{"key": "value", 'key2': "value"}`

const workingStringNewlined = JSON.stringify(workingObject, null, 2)

export default {
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
    //{
    //  fn: stringify(brokenObject),
    //  expect: is.error,
    //  info: 'returns error if object is broken after serialization',
    //},
    {
      fn: stringify(workingObject, null, 2),
      expect: workingStringNewlined,
      info: 'can handle indented newlines',
    },
  ],
}
