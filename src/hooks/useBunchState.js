import { useCustomNamedState } from './useCustomNamedState'

export function useBunchState (descriptor) {
  let keys
  if (descriptor instanceof Map) {
    keys = descriptor.keys()
  } else if (descriptor instanceof Object) {
    keys = Object.keys(descriptor)
  }
  const bunchedState = new Map()
  for (const key of keys) {
    const stateDesc = descriptor[key]
    if (typeof stateDesc === 'string') {
      bunchedState[key] = useCustomNamedState(stateDesc)
    } else {
      bunchedState[key] = useBunchState(stateDesc)
    }
  }
  return bunchedState
}
