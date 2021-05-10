import React, { useState } from 'react'
import useForm from '../hooks/useForm'
import usePasswordToggle from "../hooks/usePasswordToggle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Checkbox from '@material-ui/core/Checkbox';
import '../styles/createAccount.scss'
import Login from './Login'
import { Route, useHistory } from 'react-router-dom';
import validate from '../FormValidation/validateInfo';


const CreateAccount = ({ submitForm }) => {
  const { handleChange,  values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

   const [PasswordInputType, ToggleIcon] = usePasswordToggle();
   const history = useHistory();

const handleHistory = () => {
  history.push("/login");
}

  const [checked, setChecked] = React.useState(true);

  const changeTo = (event) => {
    setChecked(event.target.checked);
  };

 return (
  <div className='createaccount'>
   <div className="header">
    <div className="container">
        <Route path="/login" component={Login} />
      <button onClick={handleHistory}>
       Login
      </button>
    </div>
  
    <div className="ssvg"></div>
     <div className="createaccountContainer">
       <h2>Create account</h2>
       <h5>very easy and fast</h5>
      <form className="form" onSubmit={handleSubmit}>

        <div className='form_inputs'>
        <input 
        id='username' 
        type="text" 
        name='username'
        className='form_input' 
        placeholder='Username' 
        value={values.username}
        onChange={handleChange}
        />
        {errors.username && <p className='usererror'>{errors.username}</p>}
        </div>

        <div className='form_inputs'>
        <input
         id='email'  
         type="email" 
         name='email' 
         className='form_input'
         placeholder='Email' 
         value={values.email}
         onChange={handleChange}
        />
          {errors.email && <p className='emailerror'>{errors.email}</p>}
        </div>

        <div className='form_inputs'>
        <input
         id='password'
         type={PasswordInputType}
         name='password'  
         className='form_input' 
         placeholder='Password' 
         value={values.password}
         onChange={handleChange}
         />
           {errors.password && <p className='passerror'>{errors.password}</p>}
         </div>

         <div className='form_inputs'>
         <input
         id='password2'
         type={PasswordInputType}
         name='password2' 
         className='form_input' 
         placeholder='Confirm Password'
         value={values.password2}
         onChange={handleChange}
         />
           {errors.password2 && <p className='passserror'>{errors.password2}</p>}
         </div> 

         <span className="sideInputContainer">
           <FontAwesomeIcon icon="user" />
         </span> 
         <span className="se-sideInputContainer">
           <FontAwesomeIcon icon="envelope" />
         </span> 
         <span className="th-sideInputContainer">
           <FontAwesomeIcon icon="lock" />
         </span> 
         <span className="ft-sideInputContainer">
           <FontAwesomeIcon icon="lock" />
         </span> 

         <span className="password-togle-icon">{ToggleIcon}</span>
         <span className="confirm-password-toogle-icon">{ToggleIcon}</span>

         <button type='submit'>
         Submit
        </button>

          <div className='cbox'>
          <Checkbox
          checked={checked}
          onChange={changeTo}
          size="small"
          color='default'
          inputProps={{ 'aria-label':  'secondary checkbox'}}
           />
           
           <h6>By clicking submit you agree with our terms of service, ads policy and privacy policy.</h6>
          </div>

   </form>
   </div>
   </div>
  </div>
 );
};

export default CreateAccount
