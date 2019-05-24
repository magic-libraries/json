const tryCatch = fn => (...args) => {
  try {
    return fn(...args)
  } catch (e) {
    return e
  }
}

export const parse = tryCatch(JSON.parse)
export const stringify = tryCatch(JSON.stringify)

export default {
  parse,
  stringify,
}
