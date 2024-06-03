import React from 'react'
import "./Video.css"
import PlayVideo from '../../components/playVideo/PlayVideo'
import Recomended from '../../components/recommended/Recomended'
import { useParams } from 'react-router-dom'

const Video = () => {
  const { videoId, categoryId } = useParams();
  return (
    <div className='play-container'>
      <PlayVideo videoId={videoId} />
      <Recomended />
    </div>
  )
}

export default Video