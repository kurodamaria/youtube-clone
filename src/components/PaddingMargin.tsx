import React from "react";
import styled from "styled-components";

type PaddingMarginPropsT = {
  children: React.ReactNode;
  margin?: string;
  padding?: string;
}

export function PaddingMargin(props: PaddingMarginPropsT) {
  return (
    <PaddingMarginMasterContainer margin={props.margin} padding={props.padding}>
      {props.children}
    </PaddingMarginMasterContainer>
  )
}

type PaddingMarginMasterContainerPropsT = {
  margin?: string;
  padding?: string;
}
const PaddingMarginMasterContainer = styled.div<PaddingMarginMasterContainerPropsT>`
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`