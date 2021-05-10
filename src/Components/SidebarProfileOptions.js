import React from 'react'

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
