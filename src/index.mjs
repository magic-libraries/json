// the import and const lib = statements are only here for testing.
import tryCatch from '@magic-libraries/try-catch'

const lib = {
  tryCatch,
}

export const parse = lib.tryCatch(JSON.parse)
export const stringify = lib.tryCatch(JSON.stringify)

export default {
  parse,
  stringify,
}
