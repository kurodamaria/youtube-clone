import styled from "styled-components";
import {Link} from "react-router-dom";

// React-Router Link component that has a color of blue of all states
export const BlueLink = styled(Link)`
  &:link {
    color: hsla(214, 94%, 43%, 1);
  }

  &:visited {
    color: hsla(214, 94%, 43%, 1);
  }

  &:hover {
    color: hsla(214, 94%, 43%, 1);
    background-color: transparent;
  }

  &:active {
    color: hsla(214, 94%, 43%, 1);
  }
`