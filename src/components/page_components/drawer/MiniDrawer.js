import { LayoutContext } from '@Context'
import { RenderIf } from '@Helpers'
import { usePlayAnimation } from '@Hooks'
import { CssAnimationFadeBorder, CssClickTransition, CssDisplayControl } from '@Styles'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { MdExplore, MdHome, MdSubscriptions, MdVideoLibrary } from 'react-icons/md'
import styled, { css } from 'styled-components'

const MiniDrawerContainer = styled.div`
  position: fixed;
  top: var(--header-height);
  left: 0;
  bottom: 0;
  width: var(--mini-drawer-width);
  display: flex;
  flex-direction: column;
  ${CssDisplayControl}
`

const Tower = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 0em;
  ${CssClickTransition}
  ${
    props => props.playAnimation ? css`animation-name: ${CssAnimationFadeBorder};` : ''
  }
  animation-duration: 0.3s;
  &:link {
    color: hsl(0, 0%, 40%);
  }
  &:visited {
    color: ${props => props.current ? 'red' : 'hsl(0, 0%, 40%)'};
  }
  &:hover {
  }
  &:active {
  }
`

const Text = styled.div`
  font-size: ${props => props.fontSize};
`

const Icon = styled.div`
  font-size: ${props => props.size};
  display: flex;
  margin-bottom: 0.3em;
`

const MiniNavi = ({ href, icon, text }) => {
  const aniProps = usePlayAnimation('onClick')
  const router = useRouter()
  return (
    <Link href={href} passHref>
      <Tower {...aniProps} current={href === router.pathname}>
        <Icon size='1.5rem'>
          {icon}
        </Icon>
        <Text fontSize='0.65rem'>
          {text}
        </Text>
      </Tower>
    </Link>
  )
}

export const MiniDrawer = () => {
  const { MiniDrawerState } = useContext(LayoutContext)
  return (
    <RenderIf cond={MiniDrawerState.show}>
      <MiniDrawerContainer>
        <MiniNavi
          icon={<MdHome />}
          text='Home'
          href='/'
        />
        <MiniNavi
          icon={<MdExplore />}
          text='Explore'
          href='/explore'
        />
        <MiniNavi
          icon={<MdSubscriptions />}
          text='Subscriptions'
          href='/subscriptions'
        />
        <MiniNavi
          icon={<MdVideoLibrary />}
          text='Library'
          href='/library'
        />
      </MiniDrawerContainer>
    </RenderIf>
  )
}
