
import {
  MdVideoCall,
  MdApps,
  FaYoutube,
  MdNotifications,
  MdAccountCircle
} from 'react-icons/md'

import styled from 'styled-components'

import { Dropdown, Menu, MenuSection, MenuItem, IconButton, DisplayControlledDiv } from '@GCompo'
import { useContext } from 'react'
import { HeaderContext } from '@Context'

const HeaderRightContainer = styled(DisplayControlledDiv)`
  display: flex;
  margin: 0 0.2em;
  align-items: center;
`

export const HeaderRight = () => {
  const headerContext = useContext(HeaderContext)
  return (
    <HeaderRightContainer hide={headerContext.headerRight.hide}>
      <Dropdown togger={<IconButton Icon={MdVideoCall} playAnimation />}>
        <Menu>
          <MenuItem label='Upload video' />
          <MenuItem label='Go live' />
        </Menu>
      </Dropdown>
      <Dropdown togger={<IconButton Icon={MdApps} />} left>
        <Menu>
          <MenuSection>
            <MenuItem label='Youtube TV' Icon={FaYoutube} />
          </MenuSection>
          <MenuSection>
            <MenuItem label='Youtube Music' Icon={FaYoutube} />
            <MenuItem label='Youtube Kids' Icon={FaYoutube} />
          </MenuSection>
          <MenuSection>
            <MenuItem label='Youtube Academy' Icon={FaYoutube} />
            <MenuItem label='Youtube for Artists' Icon={FaYoutube} />
          </MenuSection>
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
    </HeaderRightContainer>
  )
}
