import styled from "styled-components";
import {HeaderStart} from "./Header";
import {GuideContext} from "@Context";
import {useContext} from "react";
import {NavSection, SectionTitle} from "./NavSection";
import {GuideNavItem} from "./GuideNavItem";
import {MdHistory, MdHome, MdSubscriptions} from "react-icons/all";
import {ModalBlock} from "./ModalBlock";

// A Drawer contains many links to different parts of the site.
export function Guide(): JSX.Element {
  const {showGuide, setShowGuide, lockGuide} = useContext(GuideContext)
  return (
    <>
      <GuideContainer show={showGuide} lock={lockGuide}>
        <HeaderStart/>
        <AssholeHr/>
        <NavContainer>
          <hr/>
          <NavSection>
            <GuideNavItem Icon={MdHome} desc='Home' href='/'/>
            <GuideNavItem Icon={MdSubscriptions} desc='Subscriptions' href='/subscriptions'/>
            <GuideNavItem Icon={MdHistory} desc='History' href='/history'/>
          </NavSection>
          <hr/>
          <NavSection>
            <SectionTitle>
              Notes
            </SectionTitle>
            <Desc>
              Subscriptions, history and watch later are stored in localStorage.
              <br/>
              <br/>
              The site will not work if the api quota exceeds the limitation.
            </Desc>
          </NavSection>
          <hr/>
          <NavSection>
            <SectionTitle>
              disclaimer
            </SectionTitle>
            <Desc>
              I built this website for learning purpose only. Contact me if it violates your rights.
              <br/>
              <br/>
              xfreunion@gmail.com
            </Desc>
          </NavSection>
          <hr/>
        </NavContainer>
      </GuideContainer>
      <ModalBlock show={showGuide} onClick={() => {
        setShowGuide(false)
      }}/>
    </>
  )
}

const Desc = styled.div`
  margin: 1rem 0.5rem 1.5rem 1.5rem;
  font-size: 0.75rem;
  line-height: 1.5em;
  display: flex;
  align-items: center;
`

const AssholeHr = styled.hr`
  margin-top: -1px;
  @media (min-width: 1329px) {
    display: none;
  }
`

type GuideContainerPropsT = {
  show: boolean;
  lock: boolean;
}

const GuideContainer = styled.div<GuideContainerPropsT>`
  background-color: ${props => props.theme.colors.guide.bg};
  position: fixed;
  z-index: var(--guide-z-index);
  top: 0;
  bottom: 0;
  left: calc(-1 * var(--guide-width));
  width: var(--guide-width);
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > *:nth-child(1) {
    flex-basis: var(--header-height);
    width: 169px;
  }

  transition: transform 0.2s;
  @media (max-width: 1328px) {
    transform: ${props => props.show ? 'translateX(var(--guide-width))' : 'translateX(0)'};
  }
  @media (min-width: 1329px) {
    transition: none;
    left: ${props => props.lock ? 'calc(-1 * var(--guide-width))' : '0'};
  }
`
const NavContainer = styled.div`
  overflow-y: auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`