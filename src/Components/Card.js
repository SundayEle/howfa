import React, {useState} from 'react'
import '../styles/card.scss'
import Profile from './Profile'
import captions from '../data/captions'
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import CardMenu from './CardMenu'
import Comment from './Comment'
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import imageone from '../images/sun1.jpg'
import imagetwo from '../images/sun2.JPG'
import imagethree from '../images/sun3.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: '',
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));



  function GroupAvatars() {
  return (
    <AvatarGroup max={4} style={{marginRight:'8px'}}>
      <Avatar alt="Remy Sharp" src={imageone} />
      <Avatar alt="Travis Howard" src={imagetwo} />
      <Avatar alt="Cindy Baker" src={imagethree} />
    </AvatarGroup>
  );
}



function Card(props) {

  const [likedByNumber,increaseLikes] = useState(0)
  
  const {
    cardcaption,
    hideCaption,
    captionSize
  } = props;

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit =(e) => {
    e.preventDefault()
    setOpen(false)
  }

  const {
        verifiedBorder,
        image,
        comments,
        hours,
        totalComments,
    } = props;
    
    let caption = cardcaption
 ? cardcaption 
 : captions[Math.floor(Math.random() * captions.length)].cardcaption;

 if(caption.length) {
   caption = caption;
 }


 function  ReadMore() {
  const [ isTruncated, setisTruncated] = useState(true)

  const resultString = isTruncated ? caption.slice(0, 190) : caption;

 

  function  toggleisTruncated() {
    setisTruncated(!isTruncated);
  }

  return (
    <p>
      {resultString}
      <span onClick={toggleisTruncated} className="more"> 
      {isTruncated ? "... More" : " .. Less"}</span>
    </p>
  );
}

    return (
        <div className='card'>  
        <header>
            <Profile iconSize='medium' verifiedBorder={verifiedBorder} />
           <div className="cardButton"><MoreVertOutlinedIcon /> </div>
        </header>
        <div className="cation">
             {(caption) && !hideCaption && (
              <div className="captionContainer">
                <ReadMore><span className={`caption ${captionSize}`}>{caption}</span></ReadMore> 
              </div>
            )}
        </div>
        <img className='cardImage' src={image} alt="card content"/>
        <CardMenu />
        <div className="likedBy">
            <GroupAvatars />
            <span>
                 And <strong>  {likedByNumber} others..</strong>
            </span>
            <div className="timePosted">
            {hours} HOURS AGO
        </div>
        </div>


    <React.Fragment>
      <Dialog
      className={classes.Dialog}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        onSubmit={handleSubmit}
      >
        <DialogContent className={classes.DialogContent}>
          <form className={classes.form}>
            <FormControl className={classes.formControl}>

               <TextField
                  autoFocus
                  margin="dense"
                  id="text"
                  label="Write a comment"
                  type="text"
                  autoComplete="off"
                  fullWidth
           />
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions className={classes.DialogActions}>
          <Button onClick={handleClose} color="secondary">
            Close
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Comment
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>

      <div className="cardMenu">
            <ThumbUpAltOutlinedIcon onClick= {() =>
            increaseLikes(likedByNumber + 1 ) } />
            <ChatBubbleOutlineOutlinedIcon onClick={handleClickOpen} />
            <ShareOutlinedIcon />
        </div>

    
           <div className="comments">
             <MessageOutlinedIcon />
               <div className='totalcomments'>
                <strong>{totalComments} </strong>Comments
               </div> 
            {comments.map((comment) => {
                return (
                  <Comment
                  key={comment.id} 
                  accountName={comment.user}
                  comment={comment.text} 
                  />
                );
            })
            }
        </div>
        </div>
    );
}

export default Card
