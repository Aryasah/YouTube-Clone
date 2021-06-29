import React from 'react'
import {Paper,Typography} from '@material-ui/core'
import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core/styles';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const useStyles = makeStyles((theme) => ({
    popover: {
      pointerEvents: 'none',
    },
    paper: {
      padding: theme.spacing(1),
    },
  }));

const VideoItem=({video, onVideoSelect})=>{
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
    const handlePopoverClose = () => {
        setAnchorEl(null);
      };
    
    const open = Boolean(anchorEl);

    return(
        
            
                <Paper sm={12} style={{display: 'flex',alignItems: 'center',cursor:'pointer',margin:'5px'}} onClick={()=> onVideoSelect(video)}>
                    <Paper style={{height:'21vh',width:'50%',borderRadius:'5px'}}><img style={{margin:'0px',height:'100%',width:'100%',borderRadius:'5px'}} src={video.snippet.thumbnails.medium.url} alt="Thumbnails" aria-owns={open ? 'mouse-over-popover' : undefined} aria-haspopup="true"  onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose} /></Paper>
                    <Typography style={{padding:'10px',textAlign:'left',width:'50%'}} variant="subtitle3"><b>{video.snippet.title}</b></Typography>
                    <Popover
                        id="mouse-over-popover"
                        className={classes.popover}
                        classes={{
                        paper: classes.paper,
                        }}
                        open={open}
                        anchorEl={anchorEl}
                        anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'center',
                        }}
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                        }}
                        onClose={handlePopoverClose}
                        disableRestoreFocus
                    >
                    <Typography style={{color:'#373737',fontSize:'0.60em',display:'flex',alignItems:'center'}}>Click to Play <PlayArrowIcon/></Typography>
                    </Popover>
                </Paper>
            
    )
}
export default VideoItem;