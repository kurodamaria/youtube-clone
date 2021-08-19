// place it self and it's children at it's closest positioned ancestor
import styled from "styled-components";
import React from "react";

type OverlayCorePropsT = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

function OverlayCore(props: OverlayCorePropsT): JSX.Element {
  return (
    <div
      className={props.className}
      style={props.style}
    >
      {props.children}
    </div>
  )
}

type OverlayPropsT = {
  top: string;
  right: string;
  bottom: string;
  left: string;
}

export const Overlay = styled(OverlayCore)<OverlayPropsT>`
  position: absolute;
  top: ${props => props.top};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
`