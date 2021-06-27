import React from 'react'
import '../styles/explore.scss'
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import { Route, useHistory } from 'react-router-dom';



function Explore() {

   const history = useHistory();

const getOn = () => {
  history.push("/");
}
 return (
  <div className='explore'>
   <div className="container">
    <div className="top_section">
   <h1>Explore page</h1>
   <div className="back_btn">
    
   <span onClick={getOn}> <ArrowBackOutlinedIcon /></span>
   </div>
   </div>
   </div>
  </div>
 )
}

export default Explore
