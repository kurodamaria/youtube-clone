import { useEffect } from 'react'

export function useMediaQuery (query, cb) {
  useEffect(() => {
    const mql = window.matchMedia(query)
    cb(mql)
    mql.addEventListener('change', cb)
    return () => {
      mql.removeEventListener('change', cb)
    }
  }, [query, cb])
}
