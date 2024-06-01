import React from 'react'
import "./Video.css"
import PlayVideo from '../../components/playVideo/PlayVideo'
import Recomended from '../../components/recommended/Recomended'

const Video = () => {
  return (
    <div className='play-container'>
      <PlayVideo />
      <Recomended />
    </div>
  )
}

export default Video