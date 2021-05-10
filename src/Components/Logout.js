import React from 'react'
import '../styles/logout.scss'
import { logout } from '../features/userSlice'
import { useDispatch } from "react-redux";

const Logout = () => {
  const dispatch = useDispatch();
  const handleLogout = (e) => {
   e.preventDefault();

   dispatch(logout());
 };

 return (
  <div className='logoutbutton'>
   <button className='log-out' onClick={(e) => handleLogout(e)}>
    Log out?
    </button>
  </div>
 );
};

export default Logout;
