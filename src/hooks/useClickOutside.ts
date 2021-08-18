import * as React from 'react'
import {useCallback, useEffect} from 'react'

export function useClickOutside(
    elRef: React.RefObject<HTMLElement>,
    callback: () => void
) {
    const handler = useCallback((ev: MouseEvent) => {
        if (elRef !== null && !elRef.current?.contains(ev.target as Node)) {
            callback()
        }
    }, [callback])

    useEffect(() => {
        document.addEventListener('click', handler, true)
        return () => {
            document.removeEventListener('click', handler, true)
        }
    }, [callback])
}
