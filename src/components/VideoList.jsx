import React from 'react'
import {Grid} from '@material-ui/core'
import VideoItem from './VideoItem'


const VideoList =({video, onVideoSelect})=>{
    const listOfVideos=video.map((video,id)=> <VideoItem key={id} onVideoSelect={onVideoSelect} video={video} />)
        return(
            <Grid spacing={7} >
            
                {listOfVideos}
           
            </Grid>
        )
}


export default VideoList;