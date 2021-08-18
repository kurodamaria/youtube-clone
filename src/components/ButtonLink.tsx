// Link that removed hover effect
import {Link} from "react-router-dom";
import styled from "styled-components";

export const ButtonLink = styled(Link)`
  &:hover {
    background-color: hsl(0, 0%, 100%);
  }
`