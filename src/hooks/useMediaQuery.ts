import {useCallback, useEffect, useState} from "react";

export function useMediaQuery(query: string): boolean {
    const [matched, setMatched] = useState(false)

    const handle = useCallback((ev: MediaQueryListEvent) => {
        setMatched(ev.matches)
    }, [])

    useEffect(() => {
        const mql = window.matchMedia(query)
        setMatched(mql.matches)
        mql.addEventListener('change', handle)
        return () => {
            mql.removeEventListener('change', handle)
        }
    }, [handle, query])
    return matched
}