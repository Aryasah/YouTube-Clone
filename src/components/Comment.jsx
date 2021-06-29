import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import Typography from '@material-ui/core/Typography';
import { ListItemSecondaryAction } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider'
import Popover from '@material-ui/core/Popover';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

const Comment=({data})=> {
  const classes = useStyles();
  const comment=data.snippet.topLevelComment.snippet.textDisplay;
  const author=data.snippet.topLevelComment.snippet.authorDisplayName;
  const url=data.snippet.topLevelComment.snippet.authorProfileImageUrl;
  const like=data.snippet.topLevelComment.snippet.likeCount;
  const channel=data.snippet.topLevelComment.snippet.authorChannelUrl;
  const date=data.snippet.topLevelComment.snippet.publishedAt;
  const [anchorEl, setAnchorEl] = React.useState(null);

      //   Popover
      const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
    const handlePopoverClose = () => {
        setAnchorEl(null);
      };
      const open = Boolean(anchorEl);
//   console.log(url)
  // console.log(comment)
//   video.map((video,id)=> <VideoItem key={id} onVideoSelect={onVideoSelect} video={video} />)
  return (
    <List className={classes.root}>
    
      <ListItem>
        <ListItemAvatar>
          <Avatar aria-owns={open ? 'mouse-over-popover' : undefined} aria-haspopup="true"  onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}>
          <a href={channel}>
          <img src={url} alt="title" />
          </a>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={author} secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                style={{display:'inline'}}
                color="textPrimary"
              >{comment}</Typography>
              <br/>
              <Typography
                component="span"
                variant="body2"
                style={{display:'inline',fontSize:'0.8em',fontWeight:'bold'}}
                color="textPrimary">{date.substring(0,10)}</Typography>
            </React.Fragment>
              } />
        <ListItemSecondaryAction style={{display:'flex',alignItems:'center',padding:'2px'}}>
                    <Typography variant="h6" style={{fontSize:'0.8em'}}>{like}</Typography>
                    <IconButton edge="end" aria-label="like">
                      <ThumbUpAltIcon/>
                    </IconButton>
                    
        </ListItemSecondaryAction>
      </ListItem>
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
                <Typography style={{color:'#373737',fontSize:'0.7em'}}>Click to view channel in YouTube</Typography>
                </Popover>
     <Divider />
    </List>
  );
}

export default Comment;