// change document title after rendering the component

import {useEffect} from "react";

export function useDocumentTitle(title: string): void {
  useEffect(() => {
    document.title = title
  }, [title])
}