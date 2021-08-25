import styled from "styled-components";

type UserIconPropsT = {
  radius: string;
  src: string;
}
export function UserIcon(props: UserIconPropsT) {
  return (
    <UserIconMasterContainer radius={props.radius}>
      <UserIconImage src={props.src} alt='user icon'/>
    </UserIconMasterContainer>
  )
}

type UserIconMasterContainerPropsT = {
  radius: string;
}
const UserIconMasterContainer = styled.div<UserIconMasterContainerPropsT>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.radius};
  height: ${props => props.radius};
`

const UserIconImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`
