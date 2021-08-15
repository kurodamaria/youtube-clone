import { DisplayControlledDiv } from '@GCompo'
import styled from 'styled-components'
import { DrawerTogglerAndBrand } from './DrawerTogglerAndBrand'

const HeaderLeftContainer = styled(DisplayControlledDiv)`
  display: flex;
  flex-direction: row;
`

export const HeaderLeft = () => {
  return (
    <HeaderLeftContainer>
      <DrawerTogglerAndBrand />
    </HeaderLeftContainer>
  )
}
