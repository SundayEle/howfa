import React, {useState} from 'react'
import '../styles/card.scss'
import Profile from './Profile'
import captions from '../data/captions'
import commentss from '../data/commentss'
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import CardMenu from './CardMenu'
import Comment from './Comment'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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


function Card(props) {

  const [likedByNumber,increaseLikes] = useState(0)
  
  const {
    cardcaption,
    hideCaption,
    captionSize,
    cardcomment
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
        date,
        hours,
        totalComments,
    } = props;
    
    let caption = cardcaption
 ? cardcaption 
 : captions[Math.floor(Math.random() * captions.length)].cardcaption;

    let comment = cardcomment
 ? cardcomment 
 : commentss[Math.floor(Math.random() * commentss.length)].cardcomment;


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

function  SeeMore() {
  const [ isOpen, setisOpen] = useState(true)

  const commentString = isOpen ? comment.slice(0, 180) : comment;


  function  toggleisOpen() {
    setisOpen(!isOpen);
  }

  return (
    <p>
      {commentString}
      <span onClick={toggleisOpen} className="more"> 
      {isOpen ? "... More" : " .. Less"}</span>
    </p>
  );
  
}


    return (
        <div className='card'>  
        <header>
            <Profile iconSize='medium' verifiedBorder={verifiedBorder} hideLocation={false}/>
           <div className="cardButton"><MoreHorizOutlinedIcon /> </div>
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
          <div className="groupAvatar">
            <Profile iconSize='small' verifiedBorder={false} hideLocation={true}/>
            <Profile iconSize='small' verifiedBorder={false} hideLocation={true}/>
            <Profile iconSize='small' verifiedBorder={false} hideLocation={true}/>
          </div>
            <span>
                 And <strong>  {likedByNumber} others..</strong>
            </span>
            <div className="timePosted">
            {hours} hrs ago
        </div>
         <div className="datePosted">
                {date}
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
            <FontAwesomeIcon className='fontawesomeicon' icon={[ "far","thumbs-up"]} onClick= {() =>
            increaseLikes(likedByNumber + 1 ) } />
            <FontAwesomeIcon className='fontawesomeicon' icon={["far","comment-alt"]} onClick={handleClickOpen} />
            <FontAwesomeIcon className='fontawesomeicon' icon={["far","share-square"]} />
        </div>

    
           <div className="comments">
             <MessageOutlinedIcon />
               <div className='totalcomments'> See all
                <strong> {totalComments} </strong>Comments
               </div> 
            {comments.map((comment) => {
                return (
                  <div className='commentTextContainer'>
                  <Comment
                  key={comment.id} 
                  accountName={comment.user}
                  time={comment.time} 
                  />
                  <div className="commentText">
                  <SeeMore><span>{comment}</span></SeeMore>
                  </div>
                  </div>
                );
            })
            }
            
        </div>
        </div>
    );
}

export default Card
