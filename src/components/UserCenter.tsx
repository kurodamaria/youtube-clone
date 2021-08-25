import styled from "styled-components";
import {BlueLink} from "./BlueLink";
import {Menu, MenuItem} from "./Menu";
import {NavSection} from "./NavSection";
import {
  AiFillDollarCircle,
  GiMoon,
  HiUsers,
  IoLanguage,
  IoMdCheckmark,
  MdAccountBox,
  MdArrowBack,
  MdFeedback,
  MdHelp,
  MdKeyboard,
  MdKeyboardArrowRight,
  MdLanguage,
  MdSettings,
  RiLogoutBoxRLine,
  RiShieldUserLine
} from "react-icons/all";
import React, {useCallback, useContext, useRef, useState} from "react";
import {IconContext} from "react-icons";
import {IconButton} from "./IconButton";
import {useClickOutside} from "@Hooks";
import {ThemeInfoContext} from "../context/ThemeInfoContext";
import {UserIcon} from "./UserIcon";
import {Desc} from "./Desc";

const components = [
  UserCenterMain,
  SwitchAcount,
  Appearance,
  Language,
  Location,
  RestrictedMode
]

export function UserCenter() {
  const [currentComponent, setCurrentComponent] = useState<number>(0)
  const ref = useRef<HTMLDivElement>(null)
  const clickOutsideHandle = useCallback(() => {
    setCurrentComponent(0)
  }, [setCurrentComponent])
  useClickOutside(ref, clickOutsideHandle)
  // not fun
  return (
    <Container ref={ref}>
      {components[currentComponent]({setCurrentComponent})}
    </Container>
  )
}

type UserCenterMainPropsT = {
  setCurrentComponent: React.Dispatch<React.SetStateAction<number>>;
}

function UserCenterMain({setCurrentComponent}: UserCenterMainPropsT) {
  return (
    <>
      <Header>
        <HeaderLeft>
          <UserIcon src='/shirai.jpg' radius='40px'/>
        </HeaderLeft>
        <HeaderRight>
          <div>マリア黒田</div>
          <BlueLink to='/not-implemented'>Manage your Google Account</BlueLink>
        </HeaderRight>
      </Header>
      <hr/>
      <Body>
        <IconContext.Provider value={{size: '1.5rem'}}>
          <Menu>
            <NavSection>
              <MenuItem Icon={MdAccountBox} title='Your channel'/>
              <MenuItem Icon={AiFillDollarCircle} title='Purchase and memberships'/>
              <MenuItem Icon={MdSettings} title='YouTube Studio'/>
              <MenuItem Icon={HiUsers} title='Switch account'
                        TrailIcon={MdKeyboardArrowRight}
                        onClick={() => {
                          setCurrentComponent(1)
                        }}
              />
              <MenuItem Icon={RiLogoutBoxRLine} title='Sign out'/>
            </NavSection>
            <hr/>
            <NavSection>
              <MenuItem Icon={GiMoon} title='Appearance: Light'
                        TrailIcon={MdKeyboardArrowRight}
                        onClick={() => {
                          setCurrentComponent(2)
                        }}
              />
              <MenuItem Icon={IoLanguage}
                        title='Language: English'
                        TrailIcon={MdKeyboardArrowRight}
                        onClick={() => {
                          setCurrentComponent(3)
                        }}
              />
              <MenuItem Icon={MdLanguage}
                        title='Location: United States'
                        TrailIcon={MdKeyboardArrowRight}
                        onClick={() => {
                          setCurrentComponent(4)
                        }}
              />
              <MenuItem Icon={MdSettings} title='Settings'/>
              <MenuItem Icon={RiShieldUserLine} title='Your data in YouTube'/>
              <MenuItem Icon={MdHelp} title='Help'/>
              <MenuItem Icon={MdFeedback} title='Send feedback'/>
              <MenuItem Icon={MdKeyboard} title='Keyboard shortcuts '/>
            </NavSection>
            <hr/>
            <NavSection>
              <MenuItem title='Restricted Mode: Off'
                        TrailIcon={MdKeyboardArrowRight}
                        onClick={() => {
                          setCurrentComponent(5)
                        }}
              />
            </NavSection>
          </Menu>
        </IconContext.Provider>
      </Body>
    </>
  )
}

const Container = styled.div`
  position: fixed;
  z-index: var(--user-center-z-index);
  top: 8px;
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
  flex-basis: 40px;
  flex-grow: 0;
  flex-shrink: 0;
  margin-right: 1rem;
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
  title: string;
  children: React.ReactNode;
  setCurrentComponent: React.Dispatch<React.SetStateAction<number>>;
}

function SubMenu(props: SubMenuPropsT): JSX.Element {
  return (
    <>
      <SubMenuHeader>
        <BackIconButton onClick={() => {
          props.setCurrentComponent(0)
        }}/>
        <div>{props.title}</div>
      </SubMenuHeader>
      <hr/>
      <Body>
        {props.children}
      </Body>
    </>
  )
}

const SubMenuHeader = styled.div`
  height: 49px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & > div {
    font-size: 1rem;
    line-height: 1.375em;
  }
`

const BackIconButton = styled(IconButton).attrs({Icon: MdArrowBack, iconSize: '1.5rem'})`
  height: 2.5rem;
  width: 2.5rem;
  margin: 0 4px;
`

type CSubMenuPropsT = {
  setCurrentComponent: React.Dispatch<React.SetStateAction<number>>;
}

function SwitchAcount(props: CSubMenuPropsT) {
  return (
    <SubMenu title='Switch account' setCurrentComponent={props.setCurrentComponent}>
      <Desc>Not Implemented</Desc>
    </SubMenu>
  )
}

const CheckmarkPlaceholder = styled.div`
  height: 1rem;
  width: 1rem;
  margin-right: 1rem;
`

function Appearance(props: CSubMenuPropsT) {
  const {currentTheme, setCurrentTheme} = useContext(ThemeInfoContext)
  return (
    <SubMenu title='Appearance' setCurrentComponent={props.setCurrentComponent}>
      <Menu>
        <Desc>Settings applies to this browser only</Desc>
        <NavSection style={{marginTop: '0'}}>
          <MenuItem
            Icon={currentTheme === 'system' ? IoMdCheckmark : CheckmarkPlaceholder}
            title='Use device theme'
            onClick={() => {
              setCurrentTheme('system')
            }}
          />
          <MenuItem
            Icon={currentTheme === 'dark' ? IoMdCheckmark : CheckmarkPlaceholder}
            title='Dark theme'
            onClick={() => {
              setCurrentTheme('dark')
            }}
          />
          <MenuItem
            Icon={currentTheme === 'light' ? IoMdCheckmark : CheckmarkPlaceholder}
            title='Light theme'
            onClick={() => {
              setCurrentTheme('light')
            }}
          />
        </NavSection>
      </Menu>
    </SubMenu>
  )
}

function Language(props: CSubMenuPropsT) {
  return (
    <SubMenu title='Choose your language' setCurrentComponent={props.setCurrentComponent}>
      <Menu>
        <NavSection>
          <MenuItem title='English (US)'/>
          <MenuItem title='Chinese (Simplified)'/>
        </NavSection>
      </Menu>
    </SubMenu>
  )
}

function Location(props: CSubMenuPropsT) {
  return (
    <SubMenu title='Choose your location' setCurrentComponent={props.setCurrentComponent}>
      <Menu>
        <NavSection>
          <MenuItem title='United States'/>
          <MenuItem title='United States'/>
          <MenuItem title='United States'/>
          <MenuItem title='United States'/>
          <MenuItem title='United States'/>
          <MenuItem title='United States'/>
          <MenuItem title='United States'/>
          <MenuItem title='United States'/>
          <MenuItem title='United States'/>
        </NavSection>
      </Menu>
    </SubMenu>
  )
}

function RestrictedMode(props: CSubMenuPropsT) {
  return (
    <SubMenu title='Restricted Mode' setCurrentComponent={props.setCurrentComponent}>
      <Desc>Fuck the restrict mode, I'll never implement this.</Desc>
    </SubMenu>
  )
}
