import React from 'react'
import './Recomended.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'

const Recomended = () => {
  return (
    <div className='recommended'>
        <div className="side-video-list">
            <img src={thumbnail1} alt="thumb" />
            <div className="vid-info">
                <h4>Video Title Here</h4>
                <p>Channel Name Here</p>
                <p>199k Views</p>
            </div>
        </div>
        <div className="side-video-list">
            <img src={thumbnail2} alt="thumb" />
            <div className="vid-info">
                <h4>Video Title Here</h4>
                <p>Channel Name Here</p>
                <p>199k Views</p>
            </div>
        </div>
        <div className="side-video-list">
            <img src={thumbnail3} alt="thumb" />
            <div className="vid-info">
                <h4>Video Title Here</h4>
                <p>Channel Name Here</p>
                <p>199k Views</p>
            </div>
        </div>
        <div className="side-video-list">
            <img src={thumbnail4} alt="thumb" />
            <div className="vid-info">
                <h4>Video Title Here</h4>
                <p>Channel Name Here</p>
                <p>199k Views</p>
            </div>
        </div>
        <div className="side-video-list">
            <img src={thumbnail5} alt="thumb" />
            <div className="vid-info">
                <h4>Video Title Here</h4>
                <p>Channel Name Here</p>
                <p>199k Views</p>
            </div>
        </div>
        <div className="side-video-list">
            <img src={thumbnail6} alt="thumb" />
            <div className="vid-info">
                <h4>Video Title Here</h4>
                <p>Channel Name Here</p>
                <p>199k Views</p>
            </div>
        </div>
        <div className="side-video-list">
            <img src={thumbnail7} alt="thumb" />
            <div className="vid-info">
                <h4>Video Title Here</h4>
                <p>Channel Name Here</p>
                <p>199k Views</p>
            </div>
        </div>
        <div className="side-video-list">
            <img src={thumbnail8} alt="thumb" />
            <div className="vid-info">
                <h4>Video Title Here</h4>
                <p>Channel Name Here</p>
                <p>199k Views</p>
            </div>
        </div>
    </div>
  )
}

export default Recomended