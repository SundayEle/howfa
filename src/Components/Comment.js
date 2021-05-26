import React from 'react'
import '../styles/comment.scss'
import Profile from './Profile'



function Comment(props) {
 const {accountName, comment,time} = props;


 return (
  <div className='commentsContainer'>
   <Profile iconSize='small' hideAccountName={true} verifiedBorder={true}/>
   <div className="accountName">{accountName}</div>
   <div className="comment">{comment}</div>
   <div className="commentTime">{time}</div>
  </div>
 );
}

export default Comment
