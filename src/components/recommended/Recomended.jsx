import React, { useEffect, useState } from 'react'
import './Recomended.css'
import { value_converter } from '../../data'
import { Link } from 'react-router-dom';

const Recomended = ({ categoryId }) => {

    const [apiData, setApiData] = useState([]);

    const fetchData = async () => {
        const api_key = import.meta.env.VITE_YOUTUBE_API
        const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&videoCategoryId=${categoryId}&key=${api_key}`;

        await fetch(relatedVideo_url).then(res => res.json()).then(data => setApiData(data.items));
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='recommended'>
            {apiData.map((item, index) => {
                return (
                    <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className="side-video-list" key={index}>
                        <img src={item.snippet.thumbnails.medium.url} alt="thumb" />
                        <div className="vid-info">
                            <h4>{item.snippet.title}</h4>
                            <p>{item.snippet.channelTitle}</p>
                            <p>{value_converter(item.statistics.viewCount)} Views</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Recomended