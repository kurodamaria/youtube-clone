import { firstCharUpperCased } from '@Helpers'
import { useMemo, useState } from 'react'

/**
 * name should be a string
 * this function will return an object with {name, setName}
 * initial value is always passed to useState
 * so if you don't provide initial, the initial value will be undefined
 */
export function useStateObject (name, initial) {
  const [state, setState] = useState(initial)
  const stateObj = useMemo(() => ({
    [`${name}`]: state,
    [`set${firstCharUpperCased(name)}`]: setState
  }), [name, state])

  return stateObj
}
