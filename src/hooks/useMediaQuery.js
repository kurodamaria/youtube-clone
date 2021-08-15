import { useCallback, useEffect } from 'react'

export function useMediaQuery (query, cb) {
  useEffect(() => {
    console.log(`registering ${query} with ${cb}`)
    const mql = window.matchMedia(query)
    cb(mql)
    mql.addEventListener('change', cb)
    return () => {
      console.log(`removing ${query} with ${cb}`)
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
