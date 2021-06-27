import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/forgotPassword.scss'
import Login from './Login'
import { Route, useHistory } from 'react-router-dom';
import Header from '../Components/Header'

function ForgotPassword() {
  const history = useHistory();

  const goTo = () => {
  history.push("/login");
}




 return (
  <div className='forgot_password'> 
  
    <div className="containerOne">
  <div className="containerS">
    <Route path="/login" component={Login} />
    <span className="lgbtn" onClick={goTo}>
      Login
    </span>

   
  </div>
   <form className="login-forms">

       <h2>Reset Password</h2>
      <div className="formInputs">

        <input 
        className='inputss' 
        type="email" 
        placeholder='Please enter your e-mail'
        required
        />

          <span className="iconcont">
            <FontAwesomeIcon icon="envelope" /> 
         </span> 
      
        <button className='sbtn' type='submit'>
         Submit
        </button>
   </div>
   </form>
  </div>
   </div>
 )
}

export default ForgotPassword
