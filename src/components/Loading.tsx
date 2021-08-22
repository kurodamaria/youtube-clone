import styled from "styled-components";
import {Spinner} from "./Spinner";

export function Loading() {
  return (
    <LoadingContainer>
      <Spinner size='4rem'/>
    </LoadingContainer>
  )
}

const LoadingContainer = styled.div`
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  justify-self: center;
`