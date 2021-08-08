import { useEffect } from 'react'

import { callIf } from '@Helpers'

export function useClickOutside (elRef, callback) {
  useEffect(() => {
    const handleClickOutside = e => {
      callIf(
        callback,
        !elRef?.current?.contains(e.target) &&
          typeof callback === 'function',
        e
      )
    }
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [elRef, callback])
}
