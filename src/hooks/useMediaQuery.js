import { useCallback, useEffect } from 'react'

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

export function useMediaQueryT (query, cb) {
  const tCb = useCallback((mql) => {
    if (mql.matches) {
      cb()
    }
  }, [cb])

  useMediaQuery(query, tCb)
}
