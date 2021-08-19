import styled from 'styled-components'

import {ClickableCss} from '@Styles'
import {IconContext, IconType} from "react-icons";
import React from "react";

type IconButtonPropsT = {
  iconSize?: string;
  color?: string;
  Icon: IconType;
  onClick?: (ev: React.MouseEvent<HTMLButtonElement> | undefined) => void;
  onMouseDown?: (ev: React.MouseEvent<HTMLButtonElement> | undefined) => void;
  onMouseUp?: (ev: React.MouseEvent<HTMLButtonElement> | undefined) => void;
  className?: string;
  style?: React.CSSProperties;
}

const IconButtonCore = (
  {
    iconSize = '1em',
    color = 'undefined',
    onMouseDown = () => {
    },
    onMouseUp = () => {
    },
    onClick = () => {
    },
    Icon,
    className = '',
    style = {}
  }: IconButtonPropsT
) => {
  return (
    <button onClick={onClick} onMouseUp={onMouseUp} onMouseDown={onMouseDown} className={className} style={style}>
      <IconContext.Provider value={{color: color, size: iconSize, style: {verticalAlign: 'middle'}}}>
        <Icon/>
      </IconContext.Provider>
    </button>
  )
}

export const IconButton = styled(IconButtonCore)`
  ${ClickableCss};

  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  padding: 0 0;
  border-radius: 50%;
  cursor: pointer;

  &:active {

  }
`
