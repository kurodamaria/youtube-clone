import styled from "styled-components";
import {IconButton} from "./IconButton";
import {MdNotifications, MdSettings} from "react-icons/all";
import {IconContext} from "react-icons";
import {Link} from 'react-router-dom';
import {ButtonLink} from "./ButtonLink";

export function Notifications() {
  return (
    <Container>
      <Header>
        <span>Notifications</span>
        <ButtonLink to='/not-implemented'>
          <SettingsIcon/>
        </ButtonLink>
      </Header>
      <hr/>
      <Body>
        <IconContext.Provider value={{size: '7.5rem', style: {color: 'hsl(0, 0%, 80%)', marginBottom: '1.5rem', minWidth: '7.5rem', minHeight: '7.5rem'}}}>
          <MdNotifications/>
        </IconContext.Provider>
        <strong>
          Your notifications lives here
        </strong>
        <p>
          Subscribe to you favorite channel to get notified about their latest videos.
        </p>
      </Body>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  z-index: var(--nofications-z-index);
  top: 0;
  right: 124px;
  bottom: 0;
  max-width: 480px;
  min-width: 408px;
  background-color: hsl(0, 0%, 100%);
  border: 1px solid hsl(0, 0%, 80%);
  border-top: none;
`

const Header = styled.div`
  display: flex;
  height: var(--header-height);
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
  padding-right: 0.5rem;

  & > span {
    font-size: 1rem;
  }
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  & > strong {
    width: 280px;
    text-align: center;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    line-height: 1.375em;
  }

  & > p {
    width: 280px;
    text-align: center;
    font-size: 0.825rem;
    line-height: 1.25rem;
  }
`

const SettingsIcon = styled(IconButton).attrs({iconSize: '1.5rem', Icon: MdSettings})`
  height: 2.5rem;
  width: 2.5rem;
`