import React from 'react'
import '../styles/more.scss'
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import Logout from '../Components/Logout'
import { Route, useHistory } from 'react-router-dom';


function More() {

  
   const history = useHistory();

const getOn = () => {
  history.push("/");
}
 return (
  <div className='more_page'>
   <div className="container">
     <div className="top_section">
   <h1>More page</h1>
   <div className="back_btn">
     
   <span onClick={getOn}> <ArrowBackOutlinedIcon /></span>
   </div>
   </div>
   
   </div>
     <h3>my na me is sunday ikpabi ele</h3>
 
  <h3>my na me is sunday ikpabi ele</h3>
  <h3>my na me is sunday ikpabi ele</h3>
  <h3>my na me is sunday ikpabi ele</h3>
  <h3>my na me is sunday ikpabi ele</h3>
  <h3>my na me is sunday ikpabi ele</h3>
  <h3>my na me is sunday ikpabi ele</h3>
  <h3>my na me is sunday ikpabi ele</h3>
  <h3>my na me is sunday ikpabi ele</h3>
  <h3>my na me is sunday ikpabi ele</h3>
  <div className="log_out_btn">
<Logout />
  </div>
  </div>
 )
}

export default More
