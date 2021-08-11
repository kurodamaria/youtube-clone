import { DivContainer, IconButton } from '@GCompo'
import { HeaderContext } from '@Context'
import { useContext, useEffect, useRef } from 'react'
import { MdArrowBack, MdKeyboardVoice, MdSearch } from 'react-icons/md'
import styled from 'styled-components'
import { CssDisplayControl } from 'src/styles'
import { useClickOutside, useMediaQuery } from '@Hooks'

const TextInput = styled.input.attrs({ type: 'text', placeholder: 'Search' })`
  width: 100%;
  outline: none;
  border: 0;
  font-size: 1.12rem;
  padding: 0.1em 1em;
  &:focus {
    outline: 1px solid ${props => props.theme.blue};
  }
`
const SearchButton = styled(IconButton).attrs({ children: <MdSearch /> })`
  border-radius: 0;
  transition: none !important;
`

const SearchFormCore = ({ className, style, inputFocused }) => {
  const { headerLR } = useContext(HeaderContext)
  const ref = useRef()
  useMediaQuery('(max-width: 656px)', (mql) => {
    // if the max width of the viewport is 656px and the input is focused
    // we switch to mini search header immediately
    if (mql.matches && document.activeElement === ref.current) {
      headerLR.setHide(true)
    }
  })

  useEffect(() => {
    if (inputFocused) {
      ref.current.focus()
    }
  }, [inputFocused, ref])
  return (
    <form className={className} style={style}>
      <TextInput ref={ref} />
      <SearchButton />
    </form>
  )
}

const SearchForm = styled(SearchFormCore)`
  display: flex;
  flex-grow: 1;
  border: 1px solid ${props => props.theme.white90};
  ${CssDisplayControl}
`

const SASearchButton = styled(IconButton).attrs({ children: <MdSearch /> })`
  ${CssDisplayControl}
`

const BackButton = styled(IconButton).attrs({ children: <MdArrowBack /> })`
  ${CssDisplayControl}
`

const HeaderCenterCore = ({ className, style }) => {
  const { headerLR } = useContext(HeaderContext)
  useMediaQuery('(min-width: 657px)', (mql) => {
    if (mql.matches) {
      headerLR.setHide(false)
    }
  })
  const ref = useRef()
  useClickOutside(ref, () => {
    // When use clicked outside the HeaderCenterContainer,
    // and the minified search heading is showing
    // dismiss the search
    if (headerLR.hide) {
      headerLR.setHide(false)
    }
  })
  return (
    <DivContainer ref={ref} className={className} style={style}>
      <BackButton
        onClick={
          () => {
            headerLR.setHide(false)
          }
        }
        hide={!headerLR.hide}
      />
      <SearchForm position='relative' hide={headerLR.hide ? false : undefined} inputFocused={headerLR.hide} />
      <SASearchButton
        onClick={
          () => {
            headerLR.setHide(true)
          }
        }
        hide={headerLR.hide ? true : undefined}
      />
      <IconButton>
        <MdKeyboardVoice />
      </IconButton>

    </DivContainer>
  )
}

export const HeaderCenter = styled(HeaderCenterCore)`
  max-width: var(--masthead-center-max-width);
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
  align-items: center;
  ${SASearchButton} {
    @media(min-width: 657px) {
      visibility: hidden;
      position: fixed;
    }
  }
  ${SearchForm} {
    @media(max-width: 656px) {
      visibility: hidden;
      position: fixed;
    }
  }
`
