import React from 'react'
import '../styles/sidebar.scss'
import SidebarOptions from './SidebarOptions'
import HomeIcon from '@material-ui/icons/Home';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { Route, useHistory } from 'react-router-dom';
import Notification from '../pages/Notification'
import Message from '../pages/Message'
import Groups from '../pages/Groups'
import Explore from '../pages/Explore'
import Saved from '../pages/Saved'
import More from '../pages/More'


function Sidebar() {

   const history = useHistory();

const handleHistory = () => {
  history.push("/more");
}

const goTo = () => {
  history.push("/saved");
}
const changeTo = () => {
  history.push("/message");
}
const comeBy = () => {
  history.push("/groups");
}
const seeIt = () => {
  history.push("/explore");
}
const showTo = () => {
  history.push("./notificaton")
}

 return (
  <div className='sidebar'>
    
    <span><Link to="/"><SidebarOptions active  Icon={HomeIcon} text='Home'/></Link></span>


    <Route path="/notificaton" component={Notification} />
    <span onClick={showTo}> <Link to="/notification"><SidebarOptions  Icon={NotificationsOutlinedIcon} text='Notification'/></Link></span>


    <Route path="/message" component={Message} />
   <span onClick={changeTo}> <Link to="/message"><SidebarOptions Icon={MailOutlineOutlinedIcon} text='Message'/></Link></span>

  <Route path="/groups" component={Groups} />
   <span onClick={comeBy}> <Link to="/groups"><SidebarOptions  Icon={PeopleAltOutlinedIcon} text='Groups'/></Link></span>


    <Route path="/explore" component={Explore} />
   <span onClick={seeIt}> <Link to="/explore"><SidebarOptions Icon={NearMeOutlinedIcon} text='Explore'/></Link></span>


  <Route path="/saved" component={Saved} />
   <span onClick={goTo}> <Link to="/saved"><SidebarOptions Icon={BookmarksOutlinedIcon} text='Saved'/></Link></span>


    <Route path="/more" component={More} />
    <span onClick={handleHistory}><Link to="/more"><SidebarOptions  Icon={MoreVertOutlinedIcon} text='More'/></Link></span>

   <Footer />
  </div>
 )
}

export default Sidebar
