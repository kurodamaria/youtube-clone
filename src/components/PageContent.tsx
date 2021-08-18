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
  position: relative;
  margin-top: var(--header-height);
  margin-left: 0;
  @media (min-width: 808px) {
    margin-left: var(--mini-guide-width);
  }
  @media (min-width: 1329px) {
    margin-left: var(--guide-width);
    margin-left: ${props => props.marginLeft};
  }
`
