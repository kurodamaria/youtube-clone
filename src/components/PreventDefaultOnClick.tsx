import React from "react";

type PreventRedirectionPropsT = {
  children: React.ReactNode;
}
export function PreventDefaultOnClick(props: PreventRedirectionPropsT) {
  return (
    <div onClick={(ev) => {ev.preventDefault()}}>
      {props.children}
    </div>
  )
}