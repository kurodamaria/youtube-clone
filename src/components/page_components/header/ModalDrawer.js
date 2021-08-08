import styled from 'styled-components'
import Link from 'next/link'
import { useRef, useCallback } from 'react'

import { FaYoutube } from 'react-icons/fa'
import { MdDehaze } from 'react-icons/md'

import { useClickOutside } from '@Hooks'

import {
  Modal, DivContainer, IconButton, LinkButton,
  Menu,
  MenuItem
} from '@Components'

import { CssHeaderText, CssFixed } from '@Styles'

const DrawerContainer = styled(DivContainer)`
  ${CssFixed}
  left: -240px;
  top: 0;
  bottom: 0;
  width: 240px;
  transition: transform 0.2s;
  padding: 0.2em 0.2em;
  transform: ${props => props.show ? 'translateX(240px)' : ''};
  overflow-y: auto;
  font-size: 1rem;
`

const ModalDrawerHeadContainer = styled(DivContainer)`
  display: flex;
  ${CssHeaderText}
  align-items: center;
`

const ModalDrawerHead = ({ setShow }) => {
  return (
    <ModalDrawerHeadContainer>
      <IconButton Icon={MdDehaze} onClick={() => { setShow(false) }} />
      <Link href='/' passHref>
        <LinkButton style={{ padding: '0.2em 0.5em' }}>
          <FaYoutube style={{ fontSize: '2rem', color: 'red' }} />
          Youtube
        </LinkButton>
      </Link>
    </ModalDrawerHeadContainer>
  )
}

export const ModalDrawer = ({ show, setShow, zIndex }) => {
  const ref = useRef()
  const handleClickOutside = useCallback(() => {
    setShow(false)
  }, [setShow])
  useClickOutside(ref, handleClickOutside)
  return (
    <>
      <Modal show={show} zIndex={zIndex - 1} />
      <DrawerContainer ref={ref} show={show} zIndex={zIndex}>
        <ModalDrawerHead setShow={setShow} />
        <DivContainer display='flex' alignItems='center' />
        <Menu>
          <MenuItem label='Home' />
          <MenuItem label='Explore' />
          <MenuItem label='Subscriptions' />
        </Menu>
        <Menu>
          <MenuItem label='Library' />
          <MenuItem label='History' />
          <MenuItem label='Your videos' />
          <MenuItem label='Watch later' />
          <MenuItem label='playlists (placeholder)' />
          <MenuItem label='Show more' />
        </Menu>
        <div>subscriptions</div>
        <Menu>
          <MenuItem label='Lofi Girl' />
          <MenuItem label='Lofi Girl' />
          <MenuItem label='Lofi Girl' />
          <MenuItem label='Lofi Girl' />
          <MenuItem label='Lofi Girl' />
          <MenuItem label='Show 177 more' />
        </Menu>
        <Menu>
          <MenuItem label='Youtube Premium' />
          <MenuItem label='Movies & Shows' />
          <MenuItem label='Gaming' />
          <MenuItem label='Live' />
          <MenuItem label='Fashion & Beauty' />
          <MenuItem label='Learning' />
          <MenuItem label='Sports' />
        </Menu>
        <Menu>
          <MenuItem label='Settings' />
          <MenuItem label='Report history' />
          <MenuItem label='Help' />
          <MenuItem label='Seed feedback' />
        </Menu>
        <DivContainer display='flex' wrap='wrap'>
          <a>About</a>
          <a>Press</a>
          <a>Copyright</a>
          <a>Contact us</a>
          <a>Creators</a>
          <a>Advertise</a>
          <a>Developers</a>
        </DivContainer>
        <DivContainer display='flex' wrap='wrap'>
          <a>Terms</a>
          <a>Privacy</a>
          <a>Policy & Safety</a>
          <a>How YouTube works</a>
          <a>Test new features</a>
        </DivContainer>
        <div>copyleft kurodamaria</div>
      </DrawerContainer>
    </>
  )
}
