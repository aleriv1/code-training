export function alena() {
  console.log('loveA')
}

// export const obj = { n: 'n' }
export const obj = [1]

export function isObjectEmpty(testObject) {

  if (!((typeof testObject) === 'object')) {
    console.log('that is not an object')
    return
  }

  let isEmpty = false

  if (!Array.isArray(testObject)) {
    isEmpty = !Boolean(Object.keys(testObject).length)
  } else {
    isEmpty = !Boolean(testObject.length)
  }

  return isEmpty
}
