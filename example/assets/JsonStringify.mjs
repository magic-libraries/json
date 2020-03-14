export const View = obj =>
  Pre(`
stringified JSON:

${lib.json.stringify(obj, null, 2)}
`)
