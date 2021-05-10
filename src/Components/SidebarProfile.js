import React from 'react'
import '../styles/sidebarProfile.scss'
import Profile from './Profile'
import EditIcon from '@material-ui/icons/Edit';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

function SidebarProfile(props) {

   const {accountName} = props;
   
 return (
  <div className='sidebarprofile'>

   <header>
     <div className="profile_button">
      <EditIcon />
     </div>
     <Profile iconSize='big' verifiedBorder={true} hideAccountName={false} />
     <div className="accountName">{accountName}</div>
     <div className="bio">
       <p>
         Hey kiddos, go checkout my newest video on youtube https://www.youtube.com and subscribe because am gonna be dropping more fire contents soon!
       </p>
     </div>
   </header>

   <div className="info">

   </div>
  </div>
 )
}


export default SidebarProfile
