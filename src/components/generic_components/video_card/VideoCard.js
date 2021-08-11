import styled from 'styled-components'
import Image from 'next/image'
import { IconButton } from '@GCompo'
import { MdDehaze } from 'react-icons/md'
import { CssClickable } from 'src/styles'

const Avatar = styled.img.attrs({ alt: 'avatar' })`
  border-radius: 50%;
  width: 2.25em;
  height: 2.25em;
  flex-basis: 2.25em;
  flex-grow: 0;
`
const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
`

const TextDesc = styled.div`
  text-align: start;

  font-size: ${props => props.fontSize};
  line-height: 1.2em;
  max-height: 2.4em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const MyLink = styled.a`
  color: hsl(0, 0%, 50%);
  text-align: start;
  &:link {
    color: hsl(0, 0%, 50%);
  }
  &:visited {
   color: green;
  }
  &:hover {
    color: hsl(0, 0%, 30%);
  }
  &:active {
    color: hsl(0, 0%, 30%);
  }
`

const Thumbnail = Image

const Meta = ({ title, channel, views, uploadDate }) => {
  return (
    <Flex direction='column'>
      <TextDesc fontSize='0.8rem'>{title}</TextDesc>
      <MyLink href='/fake-channel'>
        <TextDesc fontSize='0.8rem'>{channel}</TextDesc>
      </MyLink>
      <TextDesc fontSize='0.8rem'>{views} views•{uploadDate}</TextDesc>
    </Flex>
  )
}

const Details = ({ avatar, meta }) => {
  return (
    <Flex>
      <a href='/fake-channel'>
        <Avatar src={avatar} />
      </a>
      <Meta {...meta} />
      <IconButton
        Icon={MdDehaze} onClick={(ev) => {
          console.log('clicked icon')
          ev.stopPropagation()
        }}
      />
    </Flex>
  )
}

const VideoCardCore = ({ className, style }) => {
  return (
    <a className={className} style={style} href='/fake-video'>
      <Thumbnail src='/shirai.gif' width='400' height='225' alt='cover' />
      <Details
        avatar='/shirai-icon.jpg'
        meta={{
          title: 'PULLTOP『さくらいろ、舞うころに』体験版プレイムービーVol',
          channel: 'PULLTOPChannel',
          views: '2.5k',
          uploadDate: '2021/13/38'
        }}
      />
    </a>
  )
}

export const VideoCard = styled(VideoCardCore)`
  border: 1px solid blue;
  ${CssClickable}
  display: flex;
  flex-direction: column;
  color: black;
  &:active {
    color: black; 
  }
`
