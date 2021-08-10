import Link from 'next/link'
import styled from 'styled-components'
import { DivContainer, IconButton, LinkButton } from '@GCompo'

import { MdMenu } from 'react-icons/md'

import { FaYoutube } from 'react-icons/fa'
import { useContext } from 'react'
import { GlobalContext } from '@Context'

const Container = styled(DivContainer)`
  display: flex;
  align-items: center;
  height: var(--masthead-height);
`

const Icon = styled(IconButton).attrs({ Icon: MdMenu })`
`

const IconContainer = styled.div`
  width: var(--mini-drawer-width);
  height: var(--mini-drawer-width);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DrawerTogglerAndBrand = () => {
  const globalContext = useContext(GlobalContext)
  return (
    <Container>
      <IconContainer>
        <Icon
          onClick={
          () => {
            globalContext.expandedDrawer.setHide(
              !globalContext.expandedDrawer.hide
            )
          }
        }
        />
      </IconContainer>
      <Link href='/' passHref>
        <LinkButton style={{ padding: '0.2em 0.5em' }}>
          <FaYoutube style={{ fontSize: '2rem', color: 'red' }} />
          FakeTube
        </LinkButton>
      </Link>
    </Container>
  )
}
