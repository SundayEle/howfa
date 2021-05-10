import React, { useState } from 'react'
import '../styles/profile.scss'
import ProfileIcon from './ProfileIcon'
import users from '../data/users'



function Profile(props) {

 const {
  username,
  urlText,
  iconSize,
  verifiedBorder,
  hideAccountName,
  image
 } = props;

 let accountName = username 
 ? username 
 : users[Math.floor(Math.random() * users.length)].username;

 
 return (
  <div className='profile'>

   <ProfileIcon 
   iconSize={iconSize}
   verifiedBorder={verifiedBorder}
   image={image}
   />

   {(accountName) && !hideAccountName && (
     <div className="textContainer">
      <span className='accountName'>{accountName}</span>
     </div>
   )}


   <a href='/'></a>
  </div>
 )
}

export default Profile
