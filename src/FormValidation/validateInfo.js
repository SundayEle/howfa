export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = 'Username is required';
  }  else if (values.username.length < 3) {
    errors.username = 'Username needs to be at least 3 characters'
  }  else if (values.username === 'username') {
    errors.username = 'Username cannot be username'
  }  else if (values.username === 'Username') {
    errors.username = 'Username cannot be username'
  }


  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 7) {
    errors.password = 'Password needs to be at least 7 characters or more';
  }  else if (values.password === 'password') {
    errors.password = 'Password cannot be password';
  }
   else if (values.password === 'Password') {
    errors.password = 'Password cannot be password';
  }

  if (!values.password2) {
    errors.password2 = 'Please Confirm password';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Password do not match!';
  }
  return errors;
}