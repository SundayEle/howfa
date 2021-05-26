import React, { useState } from 'react'
import '../styles/profile.scss'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ProfileIcon from './ProfileIcon'
import users from '../data/users'
import location from '../data/location'



function Profile(props) {

 const {
  username,
  userLocation,
  urlText,
  iconSize,
  verifiedBorder,
  hideAccountName,
  hideLocation,
  image
 } = props;

 let accountName = username 
 ? username 
 : users[Math.floor(Math.random() * users.length)].username;

if (accountName.length > 15) {
  accountName = accountName.substring(0, 15) + "..";
}

 let cardLocation = userLocation ? userLocation : location[Math.floor(Math.random() * location.length)].userLocation;

 
 return (
  <div className='profile'>

   <ProfileIcon 
   iconSize={iconSize}
   verifiedBorder={verifiedBorder}
   image={image}
   />

   {(accountName) && !hideAccountName && !hideLocation &&(
     <div className="textContainer">
      <span className='accountName'>{accountName}</span>
      <span className="cardLocation"><LocationOnIcon/>{cardLocation}</span>
     </div>
   )}

   


   <a href='/'></a>
  </div>
 )
}

export default Profile
