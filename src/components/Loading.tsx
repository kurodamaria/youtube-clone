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
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`