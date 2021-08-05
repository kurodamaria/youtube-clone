import { Fixed } from '../enchantments/component'
import { Dropdown } from './Dropdown'
import styled from 'styled-components'
import Link from 'next/link'

import {
  MdKeyboardVoice,
  MdSearch,
  MdApps,
  MdNotifications,
  MdVideoCall,
  MdAccountCircle,
  MdDehaze
} from 'react-icons/md'

import { FaYoutube } from 'react-icons/fa'

import {
  Container,
  FlexContainer,
  FlexItemFlexContainer
} from './Containers'
import { IconButton } from './IconButton'
import { LinkButton } from './LinkButton'
import { Menu, MenuItem } from './Menu'
import { Modal } from './Modal'
import { useCallback, useRef, useState } from 'react'
import { useClickOutside } from '../hooks/useClickOutside'
import { ModalDrawer } from './ModalDrawer'

const HeaderContainer = styled(Fixed(FlexContainer))`
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  font-size: 1.5rem;
  padding: 0.2em 0.1em;
  border: 1px solid black;
`
export function Header () {
  const [show, setShow] = useState(false)

  return (
    <HeaderContainer>
      <FlexItemFlexContainer>
        <FlexContainer alignItems='center'>
          {/* Open the drawer */}
          <IconButton Icon={MdDehaze} onClick={() => { setShow(true) }} />
          <Link href='/' passHref>
            <LinkButton style={{ padding: '0.2em 0.2em' }}>
              <FaYoutube style={{ fontSize: '1.5em', color: 'red' }} />
              Youtube
            </LinkButton>
          </Link>
        </FlexContainer>
      </FlexItemFlexContainer>
      <FlexItemFlexContainer justifyContent='flex-end' alignItems='center' grow='1' style={{ maxWidth: '656px' }}>
        <IconButton Icon={MdSearch} />
      </FlexItemFlexContainer>
      <FlexItemFlexContainer margin='0 0.2em' alignItems='center'>
        {/* Open a modal for voice search */}
        <IconButton Icon={MdKeyboardVoice} />
        <Dropdown togger={<IconButton Icon={MdVideoCall} />}>
          <Menu>
            <MenuItem label='Upload video' />
            <MenuItem label='Go live' />
          </Menu>
        </Dropdown>
        <Dropdown togger={<IconButton Icon={MdApps} />} left>
          <Menu>
            <MenuItem label='Youtube TV' />
            <MenuItem label='Youtube Music' />
            <MenuItem label='Youtube Kids' />
            <MenuItem label='Youtube Academy' />
            <MenuItem label='Youtube for Artists' />
          </Menu>
        </Dropdown>
        <Dropdown togger={<IconButton Icon={MdNotifications} />} left>
          <div>
            NOTIFICATION CENTER
          </div>
        </Dropdown>
        <Dropdown left togger={<IconButton Icon={MdAccountCircle} />}>
          <div>
            USER CENTER
          </div>
        </Dropdown>
      </FlexItemFlexContainer>
      <ModalDrawer show={show} setShow={setShow} />
    </HeaderContainer>
  )
}
