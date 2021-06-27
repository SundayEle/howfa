import React from 'react'
import '../styles/groups.scss'
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import { Route, useHistory } from 'react-router-dom';
import GroupsOptions from './GroupsOptions'

function Groups() {

  const history = useHistory();
 const getOn = () => {
  history.push("/");
}
 return (
  <div className='group'>
   <div className="container">
    <div className="top_section">
      <header><h1>Groups page</h1></header>
   <div className="back_btn">
    
   <span onClick={getOn}> <ArrowBackOutlinedIcon /> </span>
   </div>
   </div>
  </div>
  <GroupsOptions text='My name is sunday ikpabi ele'/>

  <GroupsOptions text='My name is sunday ikpabi ele'/>

  <GroupsOptions text='My name is sunday ikpabi ele'/>

  <GroupsOptions text='My name is sunday ikpabi ele'/>

  <GroupsOptions text='My name is sunday ikpabi ele'/>

  <GroupsOptions text='My name is sunday ikpabi ele'/>

  <GroupsOptions text='My name is sunday ikpabi ele'/>

  <GroupsOptions text='My name is sunday ikpabi ele'/>

  <GroupsOptions text='My name is sunday ikpabi ele'/>

  <GroupsOptions text='My name is sunday ikpabi ele'/>

   <GroupsOptions text='My name is sunday ikpabi ele'/>

  <GroupsOptions text='My name is sunday ikpabi ele'/>

  <GroupsOptions text='My name is sunday ikpabi ele'/>

  <GroupsOptions text='My name is sunday ikpabi ele'/>

  <GroupsOptions text='My name is sunday ikpabi ele'/>

  <GroupsOptions text='My name is sunday ikpabi ele'/>

  <GroupsOptions text='My name is sunday ikpabi ele'/>

  <GroupsOptions text='My name is sunday ikpabi ele'/>

  <GroupsOptions text='My name is sunday ikpabi ele'/>

  <GroupsOptions text='My name is sunday ikpabi ele'/>

   <GroupsOptions text='My name is sunday ikpabi ele'/>

  <GroupsOptions text='My name is sunday ikpabi ele'/>

  <GroupsOptions text='My name is sunday ikpabi ele'/>

  <GroupsOptions text='My name is sunday ikpabi ele'/>

  <GroupsOptions text='My name is sunday ikpabi ele'/>

  <GroupsOptions text='My name is sunday ikpabi ele'/>

  <GroupsOptions text='My name is sunday ikpabi ele'/>

  <GroupsOptions text='My name is sunday ikpabi ele'/>

  <GroupsOptions text='My name is sunday ikpabi ele'/>

  <GroupsOptions text='My name is sunday ikpabi ele'/>
  </div>
 )
}

export default Groups
