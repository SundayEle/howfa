import React from 'react'
import '../styles/bottomHeaderIcon.scss'

function BottomHeaderIcon(props) {
  const {
   active,
   Icon
  } = props;
 return (
  <div className={`bottom_header_icon ${active && 'bottom_header_icon--active'}`}>
   <Icon />
  </div>
 )
}

export default BottomHeaderIcon
