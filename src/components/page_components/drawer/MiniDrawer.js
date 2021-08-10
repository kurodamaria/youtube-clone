import { GlobalContext } from '@Context'
import { Button } from '@GCompo'
import { useContext } from 'react'
import { MdExplore, MdHome, MdSubscriptions, MdVideoLibrary } from 'react-icons/md'
import { CssClickable, CssDisplayControl } from 'src/styles'
import styled from 'styled-components'
import Link from 'next/link'

const MiniDrawerContainer = styled.div`
  position: fixed;
  top: var(--masthead-height);
  left: 0;
  bottom: 0;
  width: var(--mini-drawer-width);
  @media(max-width: 807px) {
    visibility: hidden;
  }
  ${CssDisplayControl}
  display: flex;
  flex-direction: column;
`

const Tower = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 0em;
  ${CssClickable}
`

const Text = styled.div`
  font-size: ${props => props.fontSize};
`

const Icon = styled.div`
  font-size: ${props => props.size};
  display: flex;
`

const MiniNavi = ({ href, icon, text }) => {
  return (
    <Link href={href} passHref>
      <Tower>
        <Icon size='2rem'>
          {icon}
        </Icon>
        <Text fontSize='0.8rem'>
          {text}
        </Text>
      </Tower>
    </Link>
  )
}

export const MiniDrawer = () => {
  const globalContext = useContext(GlobalContext)
  return (
    <MiniDrawerContainer hide={
      globalContext.expandedDrawer.hide ? undefined : true
    }
    >
      <MiniNavi
        icon={<MdHome />}
        text='Home'
        href='/'
      />
      <MiniNavi
        icon={<MdHome />}
        text='Home'
        href='/'
      />
      <MiniNavi
        icon={<MdHome />}
        text='Home'
        href='/'
      />
      <MiniNavi
        icon={<MdHome />}
        text='Home'
        href='/'
      />
    </MiniDrawerContainer>
  )
}
