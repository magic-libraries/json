const tryCatch = fn => (...args) => {
  try {
    const res = fn(...args)
    if (res === '[]' && Object.keys(args[0]).length) {
      throw new Error('Serialization error')
    }
    return res
  } catch (e) {
    return e
  }
}

export const parse = tryCatch(JSON.parse)
export const stringify = tryCatch(JSON.stringify)

