import React from 'react'
import '../styles/groupsOptions.scss'

function GroupsOptions(props) {

 const {
  text
 } = props;
 return (
  <div className='groups_options'>
   <h4>{text}</h4>
  </div>
 )
}

export default GroupsOptions
