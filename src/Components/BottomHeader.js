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
import { Link } from 'react-router-dom'
import {BrowserRouter as Router, useHistory } from 'react-router-dom';
import Notification from '../pages/Notification'
import Message from '../pages/Message'
import Groups from '../pages/Groups'
import Explore from '../pages/Explore'
import Saved from '../pages/Saved'
import More from '../pages/More'

function BottomHeader() {

 const history = useHistory();

 const handleHistory = () => {
  history.push("/more");
}

 return (
  <div className='bottom_header'>
   <div className="container">
   
   <span><Link to="/"><BottomHeaderIcon active  Icon={HomeIcon}/></Link></span>
  

   <BottomHeaderIcon  Icon={NotificationsOutlinedIcon} />

   <BottomHeaderIcon Icon={MailOutlineOutlinedIcon} />

    <BottomHeaderIcon  Icon={PeopleAltOutlinedIcon} /> 

   <BottomHeaderIcon Icon={NearMeOutlinedIcon} />
  
  <span onClick={handleHistory}><BottomHeaderIcon  Icon={MoreHorizOutlinedIcon}/></span> 

   </div>
  </div>
 )
}

export default BottomHeader
