import React from 'react'
import '../styles/sidebarProfile.scss'
import Profile from './Profile'
import EditIcon from '@material-ui/icons/Edit';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

function SidebarProfile() {
 return (
  <div className='sidebarprofile'>
   <header>
     <EditIcon />
     <Profile iconSize='big' verifiedBorde={true} hideAccountName={false} />
   </header>
  </div>
 )
}


export default SidebarProfile
