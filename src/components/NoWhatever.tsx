import styled from "styled-components";


type NoWhateverPropsT = {
  title: string;
  desc: string;
  img: string;
}
export function NoWhatever(props: NoWhateverPropsT) {
  return (
    <NoWhateverContainer>
      <img src={props.img} alt={'no-subs'}/>
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
    </NoWhateverContainer>
  )
}

const NoWhateverContainer = styled.div`
  height: calc(100vh - var(--header-height));
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 2em;
  & > img {
    max-width: 100%;
    max-height: 50%;
  }
  & > p {
    font-size: 0.875rem;
    color: hsl(0, 0%, 50%)
  }
`