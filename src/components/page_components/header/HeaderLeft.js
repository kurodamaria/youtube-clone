import { HeaderContext } from '@Context'
import { DisplayControlledDiv } from '@GCompo'
import { useContext } from 'react'
import styled from 'styled-components'
import { DrawerTogglerAndBrand } from './DrawerTogglerAndBrand'

const HeaderLeftContainer = styled(DisplayControlledDiv)`
  display: flex;
  flex-direction: row;
`

export const HeaderLeft = () => {
  const headerContext = useContext(HeaderContext)
  return (
    <HeaderLeftContainer hide={headerContext.headerLeft.hide}>
      <DrawerTogglerAndBrand />
    </HeaderLeftContainer>
  )
}
