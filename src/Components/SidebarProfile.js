import React from 'react'
import '../styles/sidebarProfile.scss'
import Profile from './Profile'
import SidebarProfileOptions from './SidebarProfileOptions'
import EditIcon from '@material-ui/icons/Edit';
import GroupIcon from '@material-ui/icons/Group';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

function SidebarProfile(props) {

   const {accountName, cardLocation} = props;
   
 return (
  <div className='sidebarprofile'>

   <header>
     <div className="profile_button">
      <EditIcon />
     </div>
     <Profile iconSize='big' verifiedBorder={true} hideAccountName={false}/>
     <div className="accountName">{accountName}</div>
     <div className="cardLocation">{cardLocation}</div>
     <div className="bio">
       <p>
         Hey kiddos, go checkout my newest video on youtube https://www.youtube.com and subscribe because am gonna be dropping more fire contents soon!
       </p>
     </div>
   </header>

   <div className="info">
    
   {/* <SidebarProfileOptions Icon={ CalendarTodayIcon } text='Joined December 2018'/> */}

   <SidebarProfileOptions Icon={LocationOnIcon} text='Lagos, Nigeria'/>

   <SidebarProfileOptions  Icon={EmailIcon} text='ikpabisunday91@mail.com'/>

   <SidebarProfileOptions  Icon={PhoneIcon} text='+234 810-688-3191'/>

   <SidebarProfileOptions  Icon={GroupIcon} text='2,678 join-ups'/>

   <SidebarProfileOptions Icon={GroupIcon} text='678 joins'/>

   </div>
   <button>View Profile</button>
  </div>
 )
}


export default SidebarProfile
