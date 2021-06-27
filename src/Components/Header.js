import React from 'react'
import '../styles/header.scss'
import logo from '../images/HOWFA.png'
import Profile from './Profile'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';


function Header() {

 return (
  <div className='header'>
   <div className="container">
     <div class="search_box">
          <input className="search_txt" type="text" name="value" placeholder="Search Name?" />
          <div className="search_btn" alt="search icon">
              <SearchOutlinedIcon />
            </div> 
    </div>
    <span className='profile_icon'> <Profile iconSize='small' verifiedBorder={true} hideAccountName={true}/></span>
     <img className='logo' src={logo} alt="howfa logo"/>
   </div>
  </div>
 )
}

export default Header
