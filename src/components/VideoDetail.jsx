import React from 'react'
import {Paper,Grid,Typography} from '@material-ui/core'
import Welcome from './image/Welcome.png'
import Divider from '@material-ui/core/Divider'
import axios from 'axios'
import ActualComment from './ActualComment' 
import {useState} from 'react'
import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  
const useStyles = makeStyles((theme) => ({
    popover: {
      pointerEvents: 'none',
    },
    paper: {
      padding: theme.spacing(1),
    },
  }));

const VideoDetail =({video})=>{
    const [data,setData]=useState([]);
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const [opened, setOpened] = React.useState(false);


    
    if(!video) return (
        <div style={{zIndex:'-1',height:'70vh',borderRadius:'5px',display: 'flex',justifyContent:'center',alignItems: 'center',padding:'50px',flexDirection:'column'}}>
            <img className="welcome-img" style={{height:'30%',borderRadius:'5px'}} src={Welcome} alt="Welcome" />
            <Typography className="text" style={{color:'#015871',margin:'10px',textAlign:'center'}} variant="h4">Search Your Video</Typography>
            <Typography style={{color:'rgba(0, 60, 255, 0.823)',fontWeight:'bold',margin:'10px'}} variant="subtitle2">&copy; Arya Sah ~2021</Typography>
        </div>
    )
    // console.log("h")
    // console.log(video)
    // SnackBar
    const handleClick = () => {
        setOpened(true);
      };
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        
        setOpened(false);
      };
    //   Popover
    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
    const handlePopoverClose = () => {
        setAnchorEl(null);
      };
    
    const open = Boolean(anchorEl);
    const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`
    
    // https://www.googleapis.com/youtube/v3/commentThreads
    // GET https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=10&textFormat=html&videoId=YQHsXMglC9A&key=[YOUR_API_KEY] HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json


   const handleComment=()=>{
    axios.get(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=7&textFormat=plainText&videoId=${video.id.videoId}&key=AIzaSyAAZ07jzmpB9IEN-h4SspNOowV78aeZaYE`)
      .then(response => {
          const data=response.data.items;
          setData(data);
          
        console.log("Data: ", data);
       
      }).catch(error => {
        console.error('Something went wrong!', error);
      });    
      handleClick();
    }
    

    
        
        return(
            <Grid item justify="center" xs={12}>
            <Paper className="video" elevation={4} style={{height:'70vh',borderRadius:'5px'}}>
                <iframe style={{borderRadiusTop:'5px'}} frameBorder="0" title="Title" height="100%" width="100%" src={videoSrc} allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture" >

                </iframe>
            </Paper>
            <Paper elevation={6} style={{padding:'15px'}}>
                <Typography variant="h5">{video.snippet.title} -- {video.snippet.channelTitle} </Typography>
                <div style={{marginTop:'5px',paddingTop:'7px'}}><Typography style={{fontWeight:'bold'}} variant="subtitle2">Published At: {video.snippet.publishedAt.substring(0,10)}</Typography></div>
                <Divider />
                <div className="video-info"  style={{marginTop:'5px',padding:'5px',justifyContent:'left'}}>

                
                <Typography aria-owns={open ? 'mouse-over-popover' : undefined} aria-haspopup="true"  onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose} variant="subtitle1"><strong>{video.snippet.channelTitle}</strong></Typography>
                
                <Typography variant="subtitle2">{video.snippet.description}</Typography>
                <br/>
                <Typography  variant="subtitle2" style={{margin:'0px',textDecoration: 'none',cursor:'pointer'}} onClick={handleComment} color="primary">Comments</Typography>
                </div>
                <Popover
                    id="mouse-over-popover"
                    className={classes.popover}
                    classes={{
                    paper: classes.paper,
                    }}
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                >
                <Typography style={{color:'#373737',fontSize:'0.75em'}}>Channel Icon is coming soon in upcoming versions</Typography>
                </Popover>
            </Paper>
            <ActualComment data={data}/>
            <Snackbar open={opened} autoHideDuration={6000} onClose={handleClose}>
                <Alert style={{fontSize:'0.85em',textAlign:'center'}} onClose={handleClose} severity="warning">
                You need to click the comment button again after selcting new video each time
                <br/>Sorry! for Inconvenience
                </Alert>
            </Snackbar> 
            </Grid>
        )
    
}

export default VideoDetail;