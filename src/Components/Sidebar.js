import React from 'react'
import '../styles/sidebar.scss'
import SidebarOptions from './SidebarOptions'
import HomeIcon from '@material-ui/icons/Home';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';

function Sidebar() {
 return (
  <div className='sidebar'>

   <SidebarOptions active  Icon={HomeIcon} text='Home'/>

   <SidebarOptions  Icon={NotificationsOutlinedIcon} text='Notifications'/>

   <SidebarOptions Icon={MailOutlineOutlinedIcon} text='Message'/>

   <SidebarOptions  Icon={PeopleAltOutlinedIcon} text='Groups'/>

   <SidebarOptions Icon={NearMeOutlinedIcon} text='Explore'/>

   <SidebarOptions Icon={BookmarksOutlinedIcon} text='Bookmarks'/>

   <SidebarOptions  Icon={MoreHorizOutlinedIcon} text='More'/>
  </div>
 )
}

export default Sidebar
