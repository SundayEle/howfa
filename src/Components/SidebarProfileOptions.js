import React from 'react'
import '../styles/sidebarprofileoptions.scss'

function SidebarProfileOptions(props) {
   const {
   text,
   Icon
  } = props;
 return (
  <div className='sidebarprofileoptions'>
    <Icon />
   <h2>{text}</h2>
  </div>
 )
}

export default SidebarProfileOptions
