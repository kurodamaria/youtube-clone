import styled, {css} from "styled-components";
import React, {createContext, useCallback, useContext, useRef, useState} from "react";
import {IconButton} from "./IconButton";
import {
  FaYoutube,
  MdAccountCircle,
  MdApps,
  MdArrowBack,
  MdKeyboardVoice,
  MdMenu,
  MdSearch,
  MdVideoCall,
  MdWatchLater
} from "react-icons/all";
import {useClickOutside} from "@Hooks";
import {checkMedia} from "@Helpers";
import {YoutubeBrandSvg} from "./YoutubeBrandSvg";
import {GuideContext, VoiceSearchContext, VoiceSearchContextProvider} from "@Context";
import {Dropdown} from "./Dropdown";
import {Menu, MenuItem} from "./Menu";
import {NavSection} from "./NavSection";
import {Link} from "react-router-dom";
import {SearchWithVoiceDialog} from "./SearchWithVoiceDialog";
import {WatchLater} from "./WatchLater";
import {UserCenter} from "./UserCenter";
import {IconContext} from "react-icons";
import {FlexContainerLink} from "./Links";

type HeaderContextT = {
  showInput: boolean;
  setShowInput: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderContext = createContext<HeaderContextT>({} as HeaderContextT)

export function Header() {
  const [showInput, setShowInput] = useState<boolean>(false)
  return (
    <HeaderContext.Provider value={{showInput, setShowInput}}>
      <Container>
        <HeaderStart/>
        <VoiceSearchContextProvider>
          <HeaderCenter/>
        </VoiceSearchContextProvider>
        <HeaderEnd/>
      </Container>
    </HeaderContext.Provider>

  )
}

const HeaderIconButton = styled(IconButton).attrs(props => ({iconSize: '1.5rem'}))`
  height: 2.5rem;
  width: 2.5rem;
`

const HeaderCenterSearchFormIconButton = styled(IconButton).attrs(props => ({iconSize: '1.25rem'}))`
  border-radius: 0;
  width: 65px;
  padding: 1px 6px;
`

const Container = styled.div`
  position: fixed;
  z-index: var(--header-z-index);
  left: 0;
  top: 0;
  right: 0;
  height: var(--header-height);
  padding-right: 1rem;

  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.header.bg};
`
type HeaderXContainerPropsT = {
  showInput: boolean;
}

const HeaderSideContainerCss = css<HeaderXContainerPropsT>`
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: space-around;
  align-items: center;
  @media (min-width: 656px) {
    display: flex;
  }
  @media (max-width: 655px) {
    display: ${props => props.showInput ? 'none' : 'flex'}
  }
`

const HeaderStartContainer = styled.div`
  ${HeaderSideContainerCss};
  justify-content: space-between;
  flex-basis: 169px;
`
const HeaderEndContainer = styled.div`
  ${HeaderSideContainerCss};
  flex-basis: 225px;
`

const HeaderCenterSearchFormContainer = styled.form`
  display: flex;
  flex-grow: 1;
  height: 2rem;
  border: 1px solid ${props => props.theme.colors.searchForm.border};
  @media (min-width: 656px) {
    margin-left: 40px;
  }

  & > *:nth-child(1) {
    width: 100%;
    flex-grow: 1;
    padding: 0.5em 1em;
    outline: 0;

    :focus {
      outline: ${props => props.theme.colors.searchForm.inputOutline} auto 1px;
    }
  }
`

const HeaderCenterContainer = styled.div<HeaderXContainerPropsT>`
  height: var(--header-height);
  flex-basis: 728px;
  flex-grow: 0;
  flex-shrink: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & > *:nth-child(1) {
    display: none;
  }

  @media (min-width: 656px) {
    & > *:nth-child(3) {
      display: none;
    }
  }
  @media (max-width: 655px) {
    ${props => props.showInput ? css`
      // sa search button
      & > *:nth-child(3) {
        display: none;
      }

      & > *:nth-child(1) {
        display: flex;
      }
    ` : css`
      & > *:nth-child(2) {
        display: none;
      }
    `}
  }
`

function HeaderCenterSearchForm() {
  const {setShowInput} = useContext(HeaderContext)
  const inputRef = useRef<HTMLInputElement>(null!)
  return (
    <HeaderCenterSearchFormContainer action="/search" onSubmit={(ev) => {
      ev.preventDefault()
    }}>
      <input type='text'
             placeholder='Search'
             ref={inputRef}
             onFocus={() => {
               setShowInput(true)
             }}
             onBlur={() => {
               if (checkMedia('(min-width: 656px)')) {
                 setShowInput(false)
               }
             }}
      />
      <FlexContainerLink to={`/search/${inputRef.current?.value}`} onClick={(ev) => {
        if (!inputRef.current.value) {
          ev.preventDefault()
        }
      }}>
        <HeaderCenterSearchFormIconButton Icon={MdSearch}/>
      </FlexContainerLink>
    </HeaderCenterSearchFormContainer>
  )
}

const MenuIconWrapper = styled.div`
  flex-basis: var(--mini-guide-width);
  display: flex;
  justify-content: center;
  align-items: center;
`

export function HeaderStart() {
  const {showInput} = useContext(HeaderContext)
  const {showGuide, setShowGuide, lockGuide, setLockGuide} = useContext(GuideContext)
  return (
    <HeaderStartContainer showInput={showInput}>
      <MenuIconWrapper>
        <HeaderIconButton Icon={MdMenu} onClick={() => {
          if (checkMedia('(min-width: 1329px)')) {
            setShowGuide(false)
            setLockGuide(!lockGuide)
          } else { // max-width: 1328px
            setShowGuide(!showGuide)
          }
        }}/>
      </MenuIconWrapper>
      <HeaderStartBrandLink to='/'>
        <YoutubeBrandSvg/>
      </HeaderStartBrandLink>
    </HeaderStartContainer>
  )
}

const HeaderStartBrandLink = styled(Link)`
  &:hover {
    background-color: transparent;
  }
`


function HeaderCenter() {
  const {showInput, setShowInput} = useContext(HeaderContext)
  const {setShowVoiceSearch} = useContext(VoiceSearchContext)
  const ref = useRef<HTMLDivElement>(null)
  const clickOutsideHandle = useCallback(() => {
    setShowInput(false)
  }, [setShowInput])
  useClickOutside(ref, clickOutsideHandle)
  return (
    <HeaderCenterContainer showInput={showInput} ref={ref}>
      <HeaderIconButton Icon={MdArrowBack} onClick={() => {
        setShowInput(false)
      }}/>
      <HeaderCenterSearchForm/>
      <HeaderIconButton Icon={MdSearch} onClick={() => {
        setShowInput(true)
      }}/>
      <HeaderIconButton Icon={MdKeyboardVoice} onClick={() => {
        setShowVoiceSearch(true)
      }}/>
      <SearchWithVoiceDialog/>
    </HeaderCenterContainer>
  )
}

const headerDropdownMenuIconContext = {
  style: {
    color: 'red',
  },
  size: '1.5rem'
}

function HeaderEnd() {
  const {showInput} = useContext(HeaderContext)
  return (
    <HeaderEndContainer showInput={showInput}>
      <Dropdown>
        <HeaderIconButton Icon={MdVideoCall}/>
        <IconContext.Provider value={headerDropdownMenuIconContext}>
          <Menu>
            <NavSection>
              <Link to='/not-implemented'>
                <MenuItem Icon={FaYoutube} title='Upload video'/>
              </Link>
              <Link to='/not-implemented'>
                <MenuItem Icon={FaYoutube} title='Go live'/>
              </Link>
            </NavSection>
          </Menu>
        </IconContext.Provider>
      </Dropdown>
      <Dropdown>
        <HeaderIconButton Icon={MdApps}/>
        <IconContext.Provider value={headerDropdownMenuIconContext}>
          <Menu>
            <NavSection>
              <Link to='/not-implemented'>
                <MenuItem Icon={FaYoutube} title='YouTube TV'/>
              </Link>
            </NavSection>
            <hr/>
            <NavSection>
              <Link to='/not-implemented'>

                <MenuItem Icon={FaYoutube} title='YouTube Music'/>
              </Link>
              <Link to='/not-implemented'>
                <MenuItem Icon={FaYoutube} title='YouTube Kids'/>
              </Link>
            </NavSection>
            <hr/>
            <NavSection>
              <Link to='/not-implemented'>
                <MenuItem Icon={FaYoutube} title='Creator Academy'/>
              </Link>
              <Link to='/not-implemented'>
                <MenuItem Icon={FaYoutube} title='YouTube for Artists'/>
              </Link>
            </NavSection>
          </Menu>
        </IconContext.Provider>
      </Dropdown>
      <Dropdown>
        <HeaderIconButton Icon={MdWatchLater}/>
        <WatchLater/>
      </Dropdown>
      <Dropdown>
        <HeaderIconButton Icon={MdAccountCircle}/>
        <UserCenter/>
      </Dropdown>
    </HeaderEndContainer>
  )
}