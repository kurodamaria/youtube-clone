import { HeaderContextProvider } from '@Context'
import { DisplayControlledDiv } from '@GCompo'
import { useClickOutside } from '@Hooks'
import { CssFixed, CssHeaderText } from '@Styles'
import { useRef } from 'react'
import styled from 'styled-components'
import { HeaderCenter } from './HeaderCenter'
import { HeaderLeft } from './HeaderLeft'
import { HeaderRight } from './HeaderRight'

const HeaderContainer = styled(DisplayControlledDiv)`
  ${CssFixed}
  ${CssHeaderText}
  
  bottom: unset;
  height: var(--masthead-height);

  display: flex;
  justify-content: space-between;

  z-index: 1;
`

export function Header () {
  const ref = useRef()
  useClickOutside(() => {
    console.log(ref.current)
  })
  return (
    <HeaderContainer ref={ref}>
      <HeaderContextProvider>
        <HeaderLeft />
        <HeaderCenter />
        <HeaderRight />
      </HeaderContextProvider>
    </HeaderContainer>
  )
}
