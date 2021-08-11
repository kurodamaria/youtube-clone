import { createContext, useContext, useRef, useState } from 'react'
import { CssDisplayControl } from '@Styles'
import styled, { css } from 'styled-components'
import { useClickOutside } from '@Hooks'

const MenuContainer = styled.div`
  position: relative;
  display: inline-block;
`

const MenuToggerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const MenuBodyContainer = styled.div`
  ${CssDisplayControl}

  position: absolute;
  ${props => props.right ? css`left: 0;` : css`right: 0;`}

  background-color: ${props => props.theme.white};
  font-size: 1rem;

  border: 1px solid ${props => props.theme.white70};
  border-top: 0;
`

const MenuContext = createContext()

const MenuItemContainer = styled.div`
  display: flex;
  padding: 0.5em;
  padding-left: 1em;
  padding-right: 2em;
`

const MenuItemLeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-right: 0.5em;
`
const MenuItemLabel = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  white-space: nowrap;
`

export const MenuSection = styled.div`
  display: flex;
  flex-direction: column;
  & + & {
    border-top: 1px solid ${props => props.theme.white70};
  } 
  padding: 0.5em 0em;
`

export const MenuItem = ({ leading, label }) => {
  return (
    <MenuItemContainer>
      <MenuItemLeading>
        {leading}
      </MenuItemLeading>
      <MenuItemLabel>
        {label}
      </MenuItemLabel>
    </MenuItemContainer>
  )
}

export const MenuTogger = ({ children }) => {
  const { hideBody, setHideBody } = useContext(MenuContext)
  return (
    <MenuToggerContainer onClick={() => { setHideBody(!hideBody) }}>
      {children}
    </MenuToggerContainer>
  )
}

export const MenuBody = ({ children }) => {
  const { hideBody } = useContext(MenuContext)
  return (
    <MenuBodyContainer hide={hideBody}>
      {children}
    </MenuBodyContainer>
  )
}

export const Menu = ({ children }) => {
  const [hideBody, setHideBody] = useState(true)
  const ref = useRef()
  useClickOutside(ref, () => {
    if (!hideBody) {
      setHideBody(true)
    }
  })
  return (
    <MenuContext.Provider value={{ hideBody, setHideBody }}>
      <MenuContainer ref={ref}>
        {children}
      </MenuContainer>
    </MenuContext.Provider>
  )
}
