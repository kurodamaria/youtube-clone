
import {
  MdVideoCall,
  MdApps,
  MdNotifications,
  MdAccountCircle,
  MdVideoLibrary
} from 'react-icons/md'

import {
  FaYoutube
} from 'react-icons/fa'

import styled from 'styled-components'

import { Menu, MenuItemLeading, MenuItemLabel, IconButton, DisplayControlledDiv, MenuTogger, MenuBody, MenuItem, MenuSection, Spinner, Loading } from '@GCompo'
import { useContext, useMemo } from 'react'
import { HeaderContext } from '@Context'

const HeaderRightContainer = styled(DisplayControlledDiv)`
  display: flex;
  margin: 0 0.2em;
  align-items: center;
`

const MakeMenu = ({ TogglerIcon, sections }) => {
  return (
    <Menu>
      <MenuTogger>
        <IconButton>
          <TogglerIcon />
        </IconButton>
      </MenuTogger>
      <MenuBody>
        {
          sections.map((section) => {
            return (
              <MenuSection>
                {
                  section.map((item) => <MenuItem {...item} />)
                }
              </MenuSection>
            )
          })
        }
      </MenuBody>
    </Menu>
  )
}

export const HeaderRight = () => {
  const newVideoMenuData = useMemo(() => {
    return [
      [
        { leading: <FaYoutube />, label: 'Upload video', onClick: undefined },
        { leading: <FaYoutube />, label: 'Go live', onClick: undefined }
      ]
    ]
  }, [])

  const youtubeAppsMenuData = useMemo(() => {
    return [
      [
        { leading: <FaYoutube />, label: 'Youtube TV', onClick: undefined }
      ],
      [
        { leading: <FaYoutube />, label: 'Youtube Music', onClick: undefined },
        { leading: <FaYoutube />, label: 'Youtube Kids', onClick: undefined }
      ],
      [
        { leading: <FaYoutube />, label: 'Creator Academy', onClick: undefined },
        { leading: <FaYoutube />, label: 'YouTube for Artists', onClick: undefined }
      ]
    ]
  }, [])

  return (
    <HeaderRightContainer>
      <MakeMenu
        TogglerIcon={MdVideoCall}
        sections={newVideoMenuData}
      />
      <MakeMenu
        TogglerIcon={MdApps}
        sections={youtubeAppsMenuData}
      />
      <Menu>
        <MenuTogger>
          <IconButton>
            <MdNotifications />
          </IconButton>
        </MenuTogger>
        <MenuBody>
          <div style={{ width: '360px', height: '100vh', backgroundColor: 'lightcoral' }}>
            <Loading />
          </div>
        </MenuBody>
      </Menu>
      <Menu>
        <MenuTogger>
          <IconButton>
            <MdAccountCircle />
          </IconButton>
        </MenuTogger>
        <MenuBody>
          <div style={{ width: '360px', height: '100vh', backgroundColor: 'lightblue' }} />
        </MenuBody>
      </Menu>
    </HeaderRightContainer>
  )
}
