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
const SearchButton = styled(IconButton).attrs({ Icon: MdSearch })`
  border-radius: 0;
  // props.playAnimation just doesn't matter now
  // because this class has more specifity (source order specifity) than the previous
  // so the property will be override to none no matter what happened
  animation-name: none;
`

const SearchFormCore = ({ className, style, inputFocused }) => {
  const headerContext = useContext(HeaderContext)
  const ref = useRef()
  useMediaQuery('(max-width: 656px)', (mql) => {
    // if the max width of the viewport is 656px and the input is focused
    // we switch to mini search header immediately
    if (mql.matches && document.activeElement === ref.current) {
      headerContext.headerLeft.setHide(true)
      headerContext.headerRight.setHide(true)
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

const SASearchButton = styled(IconButton).attrs({ Icon: MdSearch })`
  ${CssDisplayControl}
`

const BackButton = styled(IconButton).attrs({ Icon: MdArrowBack })`
  animation: none;
  ${CssDisplayControl}
`

const HeaderCenterCore = ({ className, style }) => {
  const headerContext = useContext(HeaderContext)
  useMediaQuery('(min-width: 657px)', (mql) => {
    if (mql.matches) {
      headerContext.headerLeft.setHide(false)
      headerContext.headerRight.setHide(false)
    }
  })
  const ref = useRef()
  useClickOutside(ref, () => {
    // When use clicked outside the HeaderCenterContainer,
    // and the minified search heading is showing
    // dismiss the search
    if (headerContext.headerLeft.hide) {
      headerContext.headerLeft.setHide(false)
      headerContext.headerRight.setHide(false)
    }
  })
  return (
    <DivContainer ref={ref} className={className} style={style}>
      <BackButton
        onClick={
          () => {
            headerContext.headerLeft.setHide(false)
            headerContext.headerRight.setHide(false)
          }
        }
        hide={!headerContext.headerLeft.hide}
      />
      <SearchForm position='relative' hide={headerContext.headerLeft.hide ? false : undefined} inputFocused={headerContext.headerLeft.hide} />
      <SASearchButton
        onClick={
          () => {
            headerContext.headerLeft.setHide(true)
            headerContext.headerRight.setHide(true)
          }
        }
        hide={headerContext.headerLeft.hide ? true : undefined}
      />
      <IconButton Icon={MdKeyboardVoice} />
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
