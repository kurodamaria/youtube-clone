import styled from "styled-components";
import {HeaderStart} from "./Header";
import {GuideContext} from "@Context";
import {useContext} from "react";
import {NavSection, SectionTitle} from "./NavSection";
import {GuideNavItem} from "./GuideNavItem";
import {
  FiRadio,
  GiHanger,
  IoMdTrophy,
  MdExplore,
  MdGames,
  MdHistory,
  MdHome,
  MdLightbulbOutline,
  MdPlaylistPlay,
  MdSubscriptions,
  MdVideoLibrary,
  MdWatchLater,
  RiVideoLine
} from "react-icons/all";
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
          <NavSection>
            <GuideNavItem Icon={MdHome} desc='Home' href='/'/>
            <GuideNavItem Icon={MdExplore} desc='Explore' href='/explore'/>
            <GuideNavItem Icon={MdSubscriptions} desc='Subscriptions' href='/subscriptions'/>
          </NavSection>
          <hr/>
          <NavSection>
            <GuideNavItem Icon={MdVideoLibrary} desc='Library' href='/library'/>
            <GuideNavItem Icon={MdHistory} desc='History' href='/history'/>
            <GuideNavItem Icon={RiVideoLine} desc='Your videos' href='/your-videos'/>
            <GuideNavItem Icon={MdWatchLater} desc='Watch Later' href='/watch-later'/>
            <GuideNavItem Icon={MdPlaylistPlay} desc='Play lists . fetch from server' href='playlists'/>
          </NavSection>
          <hr/>
          <NavSection>
            <SectionTitle>
              subscriptions
            </SectionTitle>
          </NavSection>
          <hr/>
          <NavSection>
            <SectionTitle>
              more from youtube
            </SectionTitle>
            <GuideNavItem Icon={MdGames} desc='Gaming' href='/gaming'/>
            <GuideNavItem Icon={FiRadio} desc='Live' href='/live'/>
            <GuideNavItem Icon={GiHanger} desc='Fashion' href='/fashion'/>
            <GuideNavItem Icon={MdLightbulbOutline} desc='Learning' href='/learning'/>
            <GuideNavItem Icon={IoMdTrophy} desc='Sports' href='/sports'/>
          </NavSection>
          <hr/>
        </NavContainer>
      </GuideContainer>
      <ModalBlock show={showGuide} onClick={() => {setShowGuide(false)}}/>
    </>
    )
}

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