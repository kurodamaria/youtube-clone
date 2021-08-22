import {useCallback, useState} from "react";
import * as sh from '@Helpers'

// sync a react state with the localStorage.getItem(key: keyT)
// Note: call this once and pass needed functions to children
// otherwise the parent won't update when children modifies the storage
export function useStorage(key: sh.KeyT) {
  const [get, set] = useState(sh.getAll(key))
  const add = useCallback((id: string) => {
    sh.add(key, id)
    set(sh.getAll(key))
  }, [key])
  const remove = useCallback((id: string) => {
    sh.remove(key, id)
    set(sh.getAll(key))
  }, [key])
  const has = useCallback((id: string) => {
    return sh.has(key, id)
  }, [key])
  const clear = useCallback(() => {
    sh.clear(key)
    set(sh.getAll(key))
  }, [key])
  return {get, add, remove, has, clear}
}