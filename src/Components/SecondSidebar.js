import React from 'react'
import '../styles/secondSidebar.scss'
import StickyBox from "react-sticky-box";
import SidebarProfile from './SidebarProfile'
import Trending from './Trending'
import JoinOthers from './JoinOthers'
import Empty from './Empty'

function SecondSidebar() {
 return (
  <div className='secondsidebar'>
   <StickyBox>
        <Empty />
        <SidebarProfile />
        <Trending />
        <JoinOthers />
        <Empty />
   </StickyBox>
  </div>
 )
}

export default SecondSidebar
