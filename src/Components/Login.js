import React, {useState} from 'react';
import '../styles/login.scss';
import logo from '../images/HOWFA.png';
import usePasswordToggle from "../hooks/usePasswordToggle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Form from './Form';
import ForgotPassword from './ForgotPassword'
import { Route, useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";


const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

 const dispatch = useDispatch();

 const handleSubmit = (e) => {
   e.preventDefault();

   dispatch(
     login({
      name: name,
      password: password,
      loggedIn: true,
   })
   );
 };
  

  const [PasswordInputType, ToggleIcon] = usePasswordToggle();

  const history = useHistory();

const handleHistory = () => {
  history.push("/form");
}

  const changeTo = () => {
  history.push("/forgotpassword");
}
  

  
 return (
  <div className='login'>
   <div className="header">
    <div className="container">
      <img className='logo' src={logo} alt="howfa logo"/>
      <Route path="/form" component={Form} />
      <button onClick={handleHistory}>
        Create account
      </button>
    </div>
     <form className="login_form" onSubmit={(e) => handleSubmit(e)}>
       <h2>Login</h2>
      <div className="formInput">
        <input 
        className='inputs' 
        type="name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Username or Email'
        required
        />
         
        <input 
          className='inputs' 
          placeholder='Password'
          type={PasswordInputType}
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          required
          />
          <span className="sideInputContainer">
             <span className="user-icon">
           <FontAwesomeIcon icon="user" />
         </span> 
          </span>

          <span className="sidepasswordcontainer">
            <FontAwesomeIcon icon="lock" />
          </span>
      
           <span className="password-toogle-icon">{ToggleIcon}</span>
        <button type='submit'>
         Login
        </button>
      <Route path="/forgotpassword" component={ForgotPassword} />
        <h4 onClick={changeTo}>Forgotten Password?</h4>
   </div>
   </form>
   <div className="headerBottom">
     <div className="containerBottom">
     <ul className='links'>
    <li>Help</li>
    <li>Terms of service</li>
    <li>About</li>
    <li>Privacy policy</li>
    <li>Ads policy</li>
    <li>More</li>
   </ul>
  <div className="copyrights">
   ©2021 Hwfa,inc.
  </div>
  </div>
  </div>
   </div>
  </div>
 )
}
export default Login;

