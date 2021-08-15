import { LayoutContext } from '@Context'
import { DivContainer, IconButton } from '@GCompo'
import { RenderIf } from '@Helpers'
import { useContext, useEffect, useRef } from 'react'
import { MdArrowBack, MdKeyboardVoice, MdSearch } from 'react-icons/md'
import { CssDisplayControl } from 'src/styles'
import styled from 'styled-components'

const TextInput = styled.input.attrs({ type: 'text', placeholder: 'Search' })`
  width: 100%;
  outline: none;
  font-size: 1.12rem;
  padding: 0.1em 1em;
  border: 0;
  &:focus {
    border: 1px solid ${props => props.theme.blue};
  }
`
const SearchButton = styled(IconButton).attrs({ children: <MdSearch /> })`
  border-radius: 0;
  border-left: 1px solid ${props => props.theme.white85};
  transition: none !important;
`

const SearchFormCore = ({ className, style }) => {
  const { SearchFormInputState } = useContext(LayoutContext)
  const ref = useRef()
  useEffect(() => {
    if (SearchFormInputState.focus) {
      ref.current.focus()
    }
  }, [SearchFormInputState.focus])
  return (
    <form className={className} style={style}>
      <TextInput
        ref={ref}
        onFocus={() => {
          // prevent infinite loop?
          if (!SearchFormInputState.focus) {
            SearchFormInputState.setFocus(true)
          }
        }}
        onBlur={() => {
          SearchFormInputState.setFocus(false)
        }}
      />
      <SearchButton />
    </form>
  )
}

const SearchForm = styled(SearchFormCore)`
  display: flex;
  flex-grow: 1;
  border: 1px solid ${props => props.theme.white85};
  border-radius: 2px;
  ${CssDisplayControl}
`

const SASearchButton = styled(IconButton).attrs({ children: <MdSearch /> })`
  ${CssDisplayControl}
`

const BackButton = styled(IconButton).attrs({ children: <MdArrowBack /> })`
  ${CssDisplayControl}
`

const HeaderCenterCore = ({ className, style }) => {
  const { CenterRef, BackButtonState, onClickBackButton, SearchFormState, SASearchButtonState, onClickSASearchButton } = useContext(LayoutContext)
  return (
    <DivContainer ref={CenterRef} className={className} style={style}>
      <RenderIf cond={BackButtonState.show}>
        <BackButton onClick={onClickBackButton} />
      </RenderIf>
      <RenderIf cond={SearchFormState.show}>
        <SearchForm />
      </RenderIf>
      <RenderIf cond={SASearchButtonState.show}>
        <SASearchButton onClick={onClickSASearchButton} />
      </RenderIf>
      <IconButton>
        <MdKeyboardVoice />
      </IconButton>
    </DivContainer>
  )
}

export const HeaderCenter = styled(HeaderCenterCore)`
  max-width: var(--header-center-max-width);
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
  align-items: center;
`
