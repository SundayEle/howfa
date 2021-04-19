import React, {useState} from 'react'
import '../styles/card.scss'
import Profile from './Profile'
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



  function GroupAvatars() {

  return (
    <AvatarGroup max={4}>
      <Avatar alt="Remy Sharp" src={imageone} />
      <Avatar alt="Travis Howard" src={imagetwo} />
      <Avatar alt="Cindy Baker" src={imagethree} />
    </AvatarGroup>
  );
}



function Card(props) {

    const [likedByNumber, increaseLikes] = useState(0)

    const {
        verifiedBorder,
        image,
        comments,
        hours,
        totalComments,
    } = props;


    return (
        <div className='card'>  
        <header>
            <Profile iconSize='medium' verifiedBorder={verifiedBorder} />
           <div className="cardButton"><MoreVertOutlinedIcon /> </div>
        </header>
        <img className='cardImage' src={image} alt="card content"/>
        <CardMenu />
        <div className="likedBy">
            <GroupAvatars />
            <span>
                 And <strong>{likedByNumber} others..</strong>
            </span>
            <div className="timePosted">
            {hours} HOURS AGO
        </div>
        </div>

        <div className="cardMenu">
            <ThumbUpAltOutlinedIcon onClick= {() => increaseLikes(likedByNumber + 1 )}  />
            <ChatBubbleOutlineOutlinedIcon />
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
                    key ={comment.id} accountName={comment.user} comment={comment.text} 
                    />
                );
            })}
        </div>
        </div>
    )
}

export default Card
