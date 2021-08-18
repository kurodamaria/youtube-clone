import {useCallback, useEffect, useState} from "react";

// Accept an query and return true when it's matched
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
    }, [query])
    return matched
}