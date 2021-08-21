// store various types of links

import styled from "styled-components";
import {Link} from "react-router-dom";

export const FlexContainerLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: stretch;
  &:hover {
    background-color: transparent;
  }
`

export const NormalLink = styled(Link)`
  &:link {
    color: hsl(0, 0%, 50%);
  }
  &:visited {
    color: hsl(0, 0%, 50%);
  }
  &:hover {
    color: hsl(0, 0%, 30%);
    background-color: transparent;
  }
  &:active {
    color: hsl(0, 0%, 50%);
  }
`