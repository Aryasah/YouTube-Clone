import React from 'react'
import {Paper,Typography} from '@material-ui/core'

const VideoItem=({video, onVideoSelect})=>{

    return(
        
            
                <Paper sm={12} style={{display: 'flex',alignItems: 'center',cursor:'pointer',margin:'5px'}} onClick={()=> onVideoSelect(video)}>
                    <Paper style={{height:'21vh',width:'50%',borderRadius:'5px'}}><img style={{margin:'0px',height:'100%',width:'100%',borderRadius:'5px'}} src={video.snippet.thumbnails.medium.url} alt="Thumbnails" /></Paper>
                    <Typography style={{padding:'10px',textAlign:'left',width:'50%'}} variant="subtitle3"><b>{video.snippet.title}</b></Typography>
                </Paper>
            
    )
}
export default VideoItem;