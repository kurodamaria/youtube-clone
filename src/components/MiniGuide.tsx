import styled from "styled-components";
import {GuideContext} from "@Context";
import {useContext} from "react";
import {MiniGuideNavItem} from "./MiniGuideNavItem";
import {MdHistory, MdHome, MdSubscriptions} from "react-icons/all";

export function MiniGuide(): JSX.Element {
  const {lockGuide} = useContext(GuideContext)
  return (
    <MiniGuideContainer lockGuide={lockGuide}>
      <MiniGuideNavItem Icon={MdHome} desc={'Home'} href={'/'}/>
      <MiniGuideNavItem Icon={MdSubscriptions} desc={'Subscriptions'} href={'/subscriptions'}/>
      <MiniGuideNavItem Icon={MdHistory} desc={'History'} href={'/history'}/>
    </MiniGuideContainer>
  )
}

type MiniGuideContainerPropsT = {
  lockGuide: boolean;
}
const MiniGuideContainer = styled.div<MiniGuideContainerPropsT>`
  width: var(--mini-guide-width);
  position: fixed;
  z-index: var(--mini-guide-z-index);
  top: var(--header-height);
  bottom: 0;
  left: 0;
  display: none;
  flex-direction: column;
  @media (min-width: 808px) {
    display: flex;
  }
  @media (min-width: 1329px) {
    display: ${props => props.lockGuide ? '' : 'none'};
  }
`