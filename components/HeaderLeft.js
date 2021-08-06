import { useState } from 'react'
import { DivContainer } from './Containers'
import { ModalDrawer } from './ModalDrawer'
import { MdDehaze } from 'react-icons/md'
import { IconButton } from './IconButton'
import Link from 'next/link'
import { FaYoutube } from 'react-icons/fa'
import { LinkButton } from './LinkButton'
import { CssDisplayControl } from '../hooks'
import styled from 'styled-components'

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
            Youtube
          </LinkButton>
        </Link>
      </DivContainer>
    </HeaderLeftContainer>
  )
}
