import styled from "styled-components";
import React from "react";

type ErrorPropsT = {
  children: React.ReactNode;
}

export function Error(props: ErrorPropsT) {
 return (
   <ErrorContainer>
     <ErrorContainer>
       {props.children}
     </ErrorContainer>
   </ErrorContainer>
 )
}

const ErrorContainer = styled.div`
  border: 2px solid red;
  padding: 0.2em;
  font-size: 0.9em; // font will shrink as wraping more and more ErrorContainers inside one another
  border-radius: 1em;
`