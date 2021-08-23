import {useCallback, useState} from "react";
import * as sh from '@Helpers'

type RetT = [
  string[],
  (id: string) => void,
  (id: string) => void,
  () => void
]

// sync a react state with the localStorage.getItem(key: keyT)
// Note: call this once and pass needed functions to children
// otherwise the parent won't update when children modifies the storage
export function useStorage(key: sh.KeyT): RetT {
  const [data, set] = useState(sh.getAll(key))

  const add = useCallback((id: string) => {
    sh.add(key, id)
    set(sh.getAll(key))
  }, [key])

  const remove = useCallback((id: string) => {
    sh.remove(key, id)
    set(sh.getAll(key))
  }, [key])

  const clear = useCallback(() => {
    sh.clear(key)
    set(sh.getAll(key))
  }, [key])

  // mnemonic: darc(k), this is very gay, seriously
  return [data, add, remove, clear]
}