import styled from 'styled-components'

import { CssFixed, CssHeaderText } from '@Styles'
import { HeaderLeft } from './HeaderLeft'
import { HeaderCenter } from './HeaderCenter'
import { HeaderRight } from './HeaderRight'
import { DisplayControlledDiv } from '@GCompo'
import { useCustomNamedState } from 'src/hooks/useCustomNamedState'
import { HeaderContext } from '@Context'
import { useRef } from 'react/cjs/react.development'
import { useClickOutside } from '@Hooks'
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
  const headerLeft = useCustomNamedState('hide', false)
  const headerRight = useCustomNamedState('hide', false)
  const ref = useRef()
  useClickOutside(() => {
    console.log(ref.current)
  })
  return (
    <HeaderContainer ref={ref}>
      <HeaderContext.Provider value={{ headerLeft, headerRight }}>
        <HeaderLeft />
        <HeaderCenter />
        <HeaderRight />
      </HeaderContext.Provider>
    </HeaderContainer>
  )
}
