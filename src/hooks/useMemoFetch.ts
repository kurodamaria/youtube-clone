import {useEffect, useState} from "react";

// React.useMemo's data is local to every call
// So it does not work in this scenario
type CacheT = {
  raw: any;
  date: number;
}
const STORE = new Map<string, CacheT>()

// just for now
export declare type ErrorT = {
  msg: string;
}

export function useMemoFetch<DataT>(url: string, refresh: boolean = false): [DataT | null, ErrorT | null] {
  const [data, setData] = useState<DataT | null>(null)
  const [error, setError] = useState<ErrorT | null>(null)

  free()

  useEffect(() => {
    if (refresh || !hasLocalCache(url)) {
      getRemote<DataT>(url)
        .then(data => setData(data))
        .catch(err => setError(err))
    } else {
      setData(getLocal<DataT>(url))
    }
  }, [refresh, url])

  return [data, error]
}

function free() {
  const now = Date.now()
  for (const key in STORE) {
    console.log('should free', key)
    // it's never undefined, fuck you
    // @ts-ignore
    if (now - STORE.get(key).date > 20000) {
      console.log('free', key)
      STORE.delete(key)
    } else {
      console.log('do not free', key)
    }
  }
}

function hasLocalCache(url: string): boolean {
  return STORE.has(url)
}

function cache(url: string, raw: any) {
  STORE.set(url, {raw, date: Date.now()})
}

function getLocal<DataT>(url: string): DataT {
  return STORE.get(url)?.raw
}

async function getRemote<DataT>(url: string): Promise<DataT> {
  const raw = await (await fetch(url)).json()
  cache(url, raw)
  return raw as DataT
}