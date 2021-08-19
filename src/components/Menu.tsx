import {IconType} from "react-icons";
import styled from "styled-components";
import React from "react";

type MenuPropsT = {
  children: React.ReactNode;
}

export function Menu({children}: MenuPropsT): JSX.Element {
  return (
    <MenuContainer>
      {
        children
      }
    </MenuContainer>
  )
}

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.menuContainer.bg};
`

type MenuItemPropsT = {
  onClick?: () => void;
  Icon?: IconType;
  TrailIcon?: IconType;
  title: string;
  noActive?: boolean;
}

export function MenuItem(props: MenuItemPropsT): JSX.Element {
  return (
    <MenuItemContainer onClick={props.onClick}>
      {props.Icon ? <props.Icon/> : <></>}
      <span>{props.title}</span>
      {props.TrailIcon ? <props.TrailIcon/> : <></>}
    </MenuItemContainer>
  )
}

const MenuItemContainer = styled.div`
  padding: 0 2.25rem 0 1rem;
  height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.menuItemContainer.hover};
  }

  &:active {
    background-color: ${props => props.theme.colors.clickable.activeBg};
  }

  & > svg:nth-child(1) {
    margin-right: 1rem;
  }

  & > svg:nth-child(2) {
    margin-left: 1rem;
    margin-right: -1rem; // just for now... i will come up a more .. ok solution
  }

  & > svg:nth-child(3) {
    margin-left: 1rem;
    margin-right: -1rem; // just for now... i will come up a more .. ok solution
  }

  & > span {
    text-align: start;
    white-space: nowrap;
    font-size: 0.875rem;
    line-height: 1.25rem;
    flex-grow: 1;
  }
`