export const parse = (...a) => lib.tryCatch(JSON.parse)(...a)
export const stringify = (...a) => lib.tryCatch(JSON.stringify)(...a)

export default {
  parse,
  stringify,
}
