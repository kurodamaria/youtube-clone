import { firstCharUpperCased } from '@Helpers'
import { useState } from 'react'

/**
 * name should be a string
 * this function will return an object with {name, setName}
 * initial value is always passed to useState
 * so if you don't provide initial, the initial value will be undefined
 */
export function useCustomNamedState (name, initial) {
  const [state, setState] = useState(initial)
  return {
    [`${name}`]: state,
    [`set${firstCharUpperCased(name)}`]: setState
  }
}
