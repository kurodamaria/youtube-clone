import { LayoutContext } from '@Context'
import { DivContainer, IconButton, LinkButton } from '@GCompo'
import Link from 'next/link'
import { useContext } from 'react'
import { FaYoutube } from 'react-icons/fa'
import { MdMenu } from 'react-icons/md'
import styled from 'styled-components'

const Container = styled(DivContainer)`
  display: flex;
  align-items: center;
  height: var(--masthead-height);
`

// control the container size and icon size seperately
const IconContainer = styled.div`
  width: var(--mini-drawer-width);
  height: var(--mini-drawer-width);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DrawerTogglerAndBrand = () => {
  const toggler = useContext(LayoutContext).onClickDrawerToggler
  return (
    <Container>
      <IconContainer>
        <IconButton onClick={toggler}>
          <MdMenu />
        </IconButton>
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
