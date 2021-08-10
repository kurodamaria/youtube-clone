import { DivContainer, IconButton, LinkButton } from '@GCompo'
import Link from 'next/link'
import { FaYoutube } from 'react-icons/fa'
import { MdMenu } from 'react-icons/md'
import { useDrawerToggler } from 'src/hooks/useDrawerToggler'
import styled from 'styled-components'

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
  console.log('new rendering')
  const togger = useDrawerToggler()
  return (
    <Container>
      <IconContainer>
        <Icon
          onClick={togger}
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
