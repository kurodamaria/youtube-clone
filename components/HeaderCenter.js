import styled from 'styled-components'
import { IconButton } from './IconButton'
import { MdSearch, MdKeyboardVoice, MdArrowBack } from 'react-icons/md'
import { CssDisplayControl, useDisplayControl, useWindowResize } from '../hooks'
import { useCallback, useState } from 'react'
import { DivContainer } from './Containers'
import { callF } from '../helpers/conditional-invoke'

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
  display: none;
  width: 100%;
  border: 1px solid ${props => props.theme.gray};
  border-radius: 0.1em;
  @media (min-width: 656px) {
    display: flex;
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

const SearchForm = ({ hideOverride }) => {
  const [hide, setHide] = useState(false)
  console.log('SearchForm hide result', hideOverride || hide)
  return (
    <SearchFormContainer hide={hideOverride || hide}>
      <TextInput />
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
  const windowResizeHandler = useCallback(() => {
    if (window.innerWidth > 656) {
      setHideSASB(true)
    } else if (window.innerWidth <= 656) {
      setHideSASB(false)
    }
  }, [])
  useWindowResize(windowResizeHandler)
  return (
    <HeaderCenterContainer>
      {hideSASB ? <BackButton onClick={() => { callF(toggleLR); setHideSASB(false) }} /> : null}
      <SearchForm hideOverride={!hideSASB} />
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
