
import {
  MdVideoCall,
  MdApps,
  MdNotifications,
  MdAccountCircle
} from 'react-icons/md'

import {
  FaYoutube
} from 'react-icons/fa'

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
          <MenuItem label='Upload video' icon={<FaYoutube />} />
          <MenuItem label='Go live' icon={<FaYoutube />} />
        </Menu>
      </Dropdown>
      <Dropdown togger={<IconButton Icon={MdApps} />} left>
        <Menu>
          <MenuSection>
            <MenuItem label='Youtube TV' icon={FaYoutube} />
          </MenuSection>
          <MenuSection>
            <MenuItem label='Youtube Music' icon={FaYoutube} />
            <MenuItem label='Youtube Kids' icon={FaYoutube} />
          </MenuSection>
          <MenuSection>
            <MenuItem label='Youtube Academy' icon={FaYoutube} />
            <MenuItem label='Youtube for Artists' icon={FaYoutube} />
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
