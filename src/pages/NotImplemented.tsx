import styled from "styled-components";

export function NotImplemented() {
  return (
    <Container>
      <img src='/yuru-yuri-kyoko.gif' alt='hehe'/>
      <h1>Not Implemented</h1>
      <p>
        This page was not implemented because it is relatively not important
        to the core functionality of the site ;)
      </p>
    </Container>

  )
}

const Container = styled.div`
  text-align: center;
  height: calc(100vh - var(--header-height));
  background-color: ${props => props.theme.colors.generalContent.bg};
  font-size: 1.25rem;
  padding-top: 5em;
  & > img {
    display: block;
    margin: 0 auto;
  }
  & > p {
    text-align: center;
    width: 80%;
    display: inline-block;
  }
`