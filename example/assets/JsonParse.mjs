export const View = str =>
  Pre(`
parsed (and then stringified) JSON:

${lib.json.stringify(lib.json.parse(str), null, 2)}
`)
