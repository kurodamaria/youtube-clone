import styled from 'styled-components'
import { useCallback, useEffect, useRef, useState } from 'react'
import { MdSearch, MdKeyboardVoice, MdArrowBack } from 'react-icons/md'

import { IconButton, DivContainer } from '@Components'
import { useClickOutside, useWindowResize } from '@Hooks'
import { callF } from '@Helpers'
import { CssDisplayControl } from '@Styles'

/* HeaderCenter */
const TextInput = styled.input.attrs({ type: 'text', placeholder: 'Search' })`
  flex-grow: 1;
  padding: 0.3em 0.5em;
  font-size: 1rem;
  outline: none;
  border: 1px solid transparent; // placeholder...
  &:focus {
    border: 1px solid ${props => props.theme.blue};
  }
`

const SearchFormContainer = styled.form`
  visibility: hidden;
  position: fixed;
  display: flex;
  width: 100%;
  border: 1px solid ${props => props.theme.gray};
  border-radius: 0.1em;
  @media (min-width: 656px) {
    visibility: visible;
    position: static;
  }
  ${CssDisplayControl}
`

const SearchButton = styled(IconButton).attrs({ Icon: MdSearch })`
  border-radius: 0;
  padding: 0.1em 0.8em;
  background-color: ${props => props.theme.white95};
  border-left: 1px solid ${props => props.theme.gray};
  &:hover {

  }
`

const SearchForm = ({ hideOverride, showOverride, display, position, setHideSASB, toggleLR }) => {
  const windowResizeHandler = useCallback(() => {
    if (!showOverride && window.innerWidth <= 656 && document.activeElement === ref.current) {
      toggleLR()
      setHideSASB(true)
      console.log('going to hide others')
    } else {
      console.log('not going to hide others', !showOverride, window.innerWidth <= 656, document.activeElement === ref.current)
    }
  }, [showOverride, setHideSASB, toggleLR])
  useWindowResize(windowResizeHandler)
  const ref = useRef()
  useEffect(() => {
    if (showOverride) {
      ref.current.focus()
    }
  }, [showOverride])
  return (
    <SearchFormContainer hide={hideOverride} show={showOverride} display={display} position={position}>
      <TextInput ref={ref} onBlur={() => { console.log('blured ...!') }} />
      <SearchButton />
    </SearchFormContainer>
  )
}

const SASearchButton = styled(IconButton).attrs({ Icon: MdSearch })`
  @media (min-width: 656px) {
    display: none;
  }
  ${CssDisplayControl}
`
const BackButton = styled(IconButton).attrs({ Icon: MdArrowBack })`
  animation: none;
`

const HeaderCenterContainer = styled(DivContainer)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 656px;
  flex-grow: 1;
  ${CssDisplayControl}
`
const HeaderCenter = ({ hideOverride, toggleLR }) => {
  // When SASearchButton is clicked
  // Hide HeaderLeft, HeaderRight and render ac
  const [hideSASB, setHideSASB] = useState(false)
  const searchFormHideProps = hideSASB ? { showOverride: true, display: 'flex', position: 'static' } : {}
  const windowResizeHandler = useCallback(() => {
    if (hideSASB && window.innerWidth >= 656) {
      callF(toggleLR)
      setHideSASB(false)
    }
  }, [hideSASB, toggleLR])
  useWindowResize(windowResizeHandler)
  const ref = useRef()
  const clickOutsideHandler = useCallback(() => {
    if (hideSASB) {
      callF(toggleLR)
      setHideSASB(false)
    }
  }, [hideSASB, toggleLR])
  useClickOutside(ref, clickOutsideHandler)
  return (
    <HeaderCenterContainer ref={ref}>
      {hideSASB ? <BackButton onClick={() => { callF(toggleLR); setHideSASB(false) }} /> : null}
      <SearchForm {...searchFormHideProps} setHideSASB={setHideSASB} toggleLR={toggleLR} />
      <SASearchButton
        onClick={(ev) => {
          callF(toggleLR)
          setHideSASB(true)
        }}
        hide={hideSASB}
      />
      <IconButton Icon={MdKeyboardVoice} />
    </HeaderCenterContainer>
  )
}

export { HeaderCenter }
