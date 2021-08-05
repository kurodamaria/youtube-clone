export function callIf (f, condition, ...args) {
  if (condition) {
    return f(...args)
  }
}

// call if f is function
export function callF (f, ...args) {
  return callIf(f, typeof f === 'function', ...args)
}
