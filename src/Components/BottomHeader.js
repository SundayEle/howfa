import React from 'react'
import '../styles/bottomHeader.scss'
import HomeIcon from '@material-ui/icons/Home';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import BottomHeaderIcon from './BottomHeaderIcon'

function BottomHeader() {
 return (
  <div className='bottom_header'>
   <div className="container">
   
   <BottomHeaderIcon active  Icon={HomeIcon} />

   <BottomHeaderIcon  Icon={NotificationsOutlinedIcon} />

   <BottomHeaderIcon Icon={MailOutlineOutlinedIcon} />

   <BottomHeaderIcon  Icon={PeopleAltOutlinedIcon} />

   <BottomHeaderIcon Icon={NearMeOutlinedIcon} />
  
   <BottomHeaderIcon  Icon={MoreHorizOutlinedIcon} />
   </div>
  </div>
 )
}

export default BottomHeader
