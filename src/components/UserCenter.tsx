import styled from "styled-components";
import {NativeLink} from "./NativeLink";
import {Menu, MenuItem} from "./Menu";
import {NavSection} from "./NavSection";
import {
  AiFillDollarCircle,
  GiMoon,
  HiUsers,
  IoLanguage,
  MdAccountBox, MdArrowBack,
  MdFeedback,
  MdHelp,
  MdKeyboard,
  MdKeyboardArrowRight,
  MdLanguage,
  MdSettings,
  RiLogoutBoxRLine,
  RiShieldUserLine
} from "react-icons/all";
import React from "react";
import {IconContext} from "react-icons";
import {IconButton} from "./IconButton";

export function UserCenter() {
  return (
    <Container>
      <Header>
        <HeaderLeft>
          <img src='/shirai.jpg'/>
        </HeaderLeft>
        <HeaderRight>
          <div>マリア黒田</div>
          <NativeLink to='/not-implemented'>Manage your Google Account</NativeLink>
        </HeaderRight>
      </Header>
      <hr/>
      <Body>
        <IconContext.Provider value={{size: '1.5rem'}}>
          <Menu>
            <NavSection>
              <MenuItem Icon={MdAccountBox} title='Your channel' to='/not-implemented'/>
              <MenuItem Icon={AiFillDollarCircle} title='Purchase and memberships' to='/not-implemented'/>
              <MenuItem Icon={MdSettings} title='YouTube Studio' to='/not-implemented'/>
              <MenuItem Icon={HiUsers} title='Switch account' to='/not-implemented' TrailIcon={MdKeyboardArrowRight}/>
              <MenuItem Icon={RiLogoutBoxRLine} title='Sign out' to='/not-implemented'/>
            </NavSection>
            <hr/>
            <NavSection>
              <MenuItem Icon={GiMoon} title='Appearance: Light' to='/not-implemented' TrailIcon={MdKeyboardArrowRight}/>
              <MenuItem Icon={IoLanguage} title='Language: English' to='/not-implemented' TrailIcon={MdKeyboardArrowRight}/>
              <MenuItem Icon={MdLanguage} title='Location: United States' to='/not-implemented' TrailIcon={MdKeyboardArrowRight}/>
              <MenuItem Icon={MdSettings} title='Settings' to='/not-implemented'/>
              <MenuItem Icon={RiShieldUserLine} title='Your data in YouTube' to='/not-implemented'/>
              <MenuItem Icon={MdHelp} title='Help' to='/not-implemented'/>
              <MenuItem Icon={MdFeedback} title='Send feedback' to='https://github.com/kurodamaria/youtube-clone/issues'/>
              <MenuItem Icon={MdKeyboard} title='Keyboard shortcuts ' to='/not-implemented'/>
            </NavSection>
            <hr/>
            <NavSection>
              <MenuItem title='Restricted Mode: Off' to='/not-implemented' TrailIcon={MdKeyboardArrowRight}/>
            </NavSection>
          </Menu>
        </IconContext.Provider>
      </Body>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  z-index: var(--user-center-z-index);
  top: 0;
  right: 76px;
  width: 300px;
  border: 1px solid hsl(0, 0%, 80%);
  border-top: none;
  background-color: hsl(0, 0%, 100%);
`

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  height: 83px;
  padding: 1rem;
`

const HeaderLeft = styled.div`
  display: flex;
  align-items: flex-start;
  width: 40px;
  height: 40px;
  flex-basis: 40px;
  flex-grow: 0;
  flex-shrink: 0;
  margin-right: 1rem;

  & > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`

const HeaderRight = styled.div`
  display: flex;
  flex-direction: column;

  & > div {
    font-size: 1rem;
    line-height: 1.375em;
  }

  // NativeLink will render an a in the dom
  & > a {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`

const Body = styled.div`
  height: calc(100% - 84px);
  overflow-y: auto;
`

type SubMenuPropsT = {

}
function SubMenu() {

}

const SubMenuHeader = styled.div`
  width: 49px;
  display: flex; 
  justify-content: flex-start;
`

const BackIconButton = styled(IconButton).attrs({Icon: MdArrowBack, iconSize: '1.5rem'})`
  height: 2.75rem;
  width: 2.75rem;
`