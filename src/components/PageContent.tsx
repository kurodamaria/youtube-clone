// the actual content area
import styled from "styled-components";
import React, {useContext} from "react";
import {GuideContext} from "@Context";

type PageContentPropsT = {
  children: React.ReactNode;
}
export function PageContent ({children}: PageContentPropsT):JSX.Element {
  const {lockGuide} = useContext(GuideContext)
  return (
    <PageContentContainer marginLeft={lockGuide ? 'var(--mini-guide-width)' : ''}>
      {children}
    </PageContentContainer>
  )
}

type PageContentContainerPropsT = {
  marginLeft: string;
}
const PageContentContainer = styled.div<PageContentContainerPropsT>`
  position: fixed;
  top: var(--header-height);
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  @media (min-width: 808px) {
    left: var(--mini-guide-width);
  }
  @media (min-width: 1329px) {
    left: var(--guide-width);
    left: ${props => props.marginLeft};
  }
`
