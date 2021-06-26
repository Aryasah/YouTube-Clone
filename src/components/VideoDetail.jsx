import React from 'react'
import {Paper,Grid,Typography} from '@material-ui/core'
import Welcome from './image/Welcome.png'


const VideoDetail =({video})=>{
    if(!video) return (
        <div style={{zIndex:'-1',height:'70vh',borderRadius:'5px',display: 'flex',justifyContent:'center',alignItems: 'center',padding:'50px',flexDirection:'column'}}>
            <img  style={{height:'50%',borderRadius:'5px'}} src={Welcome} alt="Welcome" />
            <Typography style={{color:'#015871',margin:'10px'}} variant="h4">Search Your Video</Typography>
            <Typography style={{color:'rgba(0, 60, 255, 0.823)',fontWeight:'bold',margin:'10px'}} variant="subtitle2">&copy; Arya Sah ~2021</Typography>
        </div>
    )
    console.log(video)
    const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`
        
        return(
            <Grid item xs={12}>
            <Paper elevation={4} style={{height:'70vh',borderRadius:'5px'}}>
                <iframe frameBorder="0" title="Title" height="100%" width="100%" src={videoSrc}>

                </iframe>
            </Paper>
            <Paper elevation={6} style={{padding:'15px'}}>
                <Typography variant="h5">{video.snippet.title} -- {video.snippet.channelTitle} </Typography>
                <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle2">{video.snippet.description}</Typography>

            </Paper>
            </Grid>
        )
    
}

export default VideoDetail;