import React, {useContext} from "react";
import styled, {css} from "styled-components";
import {StorageContext} from "@Context";

type PropsT = {
  channelId: string;
  className?: string;
  style?: React.CSSProperties;
}

function _SubscribeButton(props: PropsT) {
  const [subs, add, remove] = useContext(StorageContext).subsStorage
  return (
    <>
      {
        subs.includes(props.channelId)
          ? <UnsubscribeButton className={props.className} style={props.style} onClick={() => {
            remove(props.channelId)
            console.log('unsubscribed', props.channelId)
          }}
          >subscribed</UnsubscribeButton>
          : <SubscribeChannelButton className={props.className} style={props.style} onClick={() => {
            add(props.channelId)
            console.log('subscribed', props.channelId)
          }}>subscribe</SubscribeChannelButton>
      }
    </>
  )
}

// Yeah everything has a reason in it
export const SubscribeButton = styled(_SubscribeButton)``

const ButtonCss = css`
  align-self: center;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  font-stretch: 100%;
  cursor: pointer;
  padding: 10px 16px;
  text-transform: uppercase;
  border: none;
`

const SubscribeChannelButton = styled.button`
  ${ButtonCss};
  color: hsl(0, 0%, 100%);
  background-color: hsl(0, 100%, 40%);
`

const UnsubscribeButton = styled.button`
  ${ButtonCss};
  color: hsl(0, 0%, 38%);
  background-color: hsla(0, 0%, 0%, 0.05);
`
