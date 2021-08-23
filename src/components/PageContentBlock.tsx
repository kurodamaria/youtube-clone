// Block Page Content Area
import styled, {css} from "styled-components";
import {useDisableBodyScroll} from "@Hooks";
import {useContext} from "react";
import {GuideContext} from "@Context";

type PageContentBlockPropsT = {
  block: boolean;
  show: boolean;
}
export function PageContentBlock(props: PageContentBlockPropsT) {
  const guideContext = useContext(GuideContext)
  useDisableBodyScroll(props.show && props.block)
  return (
    <PageContentContainer show={props.show}
                          marginLeft={guideContext.lockGuide ? 'var(--mini-guide-width)' : 'var(--guide-width)'}
    />
  )
}

type PageContentBlockContainerPropsT = {
  marginLeft: string;
  show: boolean;
}
const PageContentContainer = styled.div<PageContentBlockContainerPropsT>`
  transition: visibility 0s ${props => props.show ? '' : '0.5s'},
              opacity 0.5s;
  ${props => props.show
          ? css`
            opacity: 1;
            visibility: visible;
          `
          : css`
            opacity: 0;
            visibility: hidden;
          `
  } 
  position: fixed;
  z-index: 888888;
  top: var(--header-height);
  bottom: 0;
  right: 0;
  @media (min-width: 808px) {
    left: var(--mini-guide-width);
  }
  @media (min-width: 1329px) {
    left: var(--guide-width);
    left: ${props => props.marginLeft};
  }
  background-color: hsla(0, 0%, 100%, 0.5);
`
