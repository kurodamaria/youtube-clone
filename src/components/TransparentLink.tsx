import styled from "styled-components";
import {Link} from "react-router-dom";

// Note: put something inside...
export const TransparentLink = styled(Link)`
  &:hover {
    background-color: transparent;
  }
`