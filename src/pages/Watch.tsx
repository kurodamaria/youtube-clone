import {useParams} from "react-router-dom";
import {useDocumentTitle} from "../hooks/useDocumentTitle";
import {useEffect, useRef} from "react";

// ... this is lame
type PageParamsType = {
  id: string;
}

export function Watch() {
  const {id} = useParams<PageParamsType>()
  const ref = useRef<HTMLIFrameElement>(null!)
  useDocumentTitle(id)
  const video =
    <iframe width="100%" height="80%" title={id} ref={ref}
            src={`https://www.youtube.com/embed/${id}?&autoplay=1&controls=1&modestbranding=1&disablekb=1`}
            frameBorder="0"
            allowFullScreen
    />
  useEffect(() => {
    console.log(ref)
  }, )
  return (
    <>
      {video}
    </>
  )
}