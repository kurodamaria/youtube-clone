import styled from 'styled-components'
import Link from 'next/link'
import { useState } from 'react'
import { MdDehaze } from 'react-icons/md'
import { FaYoutube } from 'react-icons/fa'

import { DivContainer, IconButton, LinkButton } from '@Components'
import { CssDisplayControl } from '@Styles'
import { ModalDrawer } from './ModalDrawer'

const HeaderLeftContainer = styled(DivContainer)`
  display: flex;
  flex-direction: row;
  ${CssDisplayControl}
`

export const HeaderLeft = ({ hideOverride }) => {
  const [show, setShow] = useState(false)
  return (
    <HeaderLeftContainer hide={hideOverride}>
      {/* Have to leve up the Drawer because those dropdowns take absolute position */}
      <ModalDrawer show={show} setShow={setShow} zIndex={2} />
      <DivContainer display='flex' alignItems='center'>
        <IconButton Icon={MdDehaze} onClick={() => { setShow(true) }} />
        <Link href='/' passHref>
          <LinkButton style={{ padding: '0.2em 0.5em' }}>
            <FaYoutube style={{ fontSize: '2rem', color: 'red' }} />
            FakeTube
          </LinkButton>
        </Link>
      </DivContainer>
    </HeaderLeftContainer>
  )
}
