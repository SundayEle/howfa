  
import React, { useState } from 'react';
import CreateAccount from './CreateAccount';
import Login from './Login';
import { useHistory } from 'react-router-dom';



const Form = () => {
   const history = useHistory();
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
     history.push("/Login");
     
    
  }
  return (

      <div>
        {!isSubmitted ? 
          <CreateAccount submitForm={submitForm} /> : <Login />
        }

      </div>
  );
};

export default Form;