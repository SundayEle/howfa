import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/forgotPassword.scss'
import Login from './Login'
import Form from './Form';
import { Route, useHistory } from 'react-router-dom';

function ForgotPassword() {
  const history = useHistory();

  const goTo = () => {
  history.push("/login");
}

const handleHistory = () => {
  history.push("/form");
}


 return (
  <div className='forgot_password'> 
   <div className="headerOne">
    <div className="containerOne">
  <div className="containerS">
    <Route path="/login" component={Login} />
    <span className="lgbtn" onClick={goTo}>
      Login
    </span>

      <Route path="/form" component={Form} />
      <span className='lgbtns' onClick={handleHistory}>
        Create account
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
   </div>
 )
}

export default ForgotPassword
