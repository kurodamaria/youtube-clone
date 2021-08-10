import styled from 'styled-components'
import Image from 'next/image'

const VideoCardCore = ({ className, style }) => {
  return (
    <div className={className} style={style}>
      <Image src='/shirai.gif' width='400' height='225' alt='cover' />
      <div>
        Why I smile like that - as a tokiwadai student
      </div>
    </div>
  )
}

export const VideoCard = styled(VideoCardCore)`
  border: 1px solid blue;
`
