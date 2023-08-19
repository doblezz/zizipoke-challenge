import React from 'react';
import { logout } from '../../redux/authAction';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.isLogged);

  const dispatch = useDispatch();

  function Close(){
    dispatch(logout());
  }

  return (
    <div>
      Navbar
      {isLoggedIn ? <button onClick={() => Close()}>logate</button> : ''}
    </div>
  )
}

export default Navbar