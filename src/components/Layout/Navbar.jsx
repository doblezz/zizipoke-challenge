import React from 'react';
import { logout } from '../../redux/authAction';
import { useDispatch, useSelector } from 'react-redux';

// Styles scss
import './styles-components/Navbar.scss';
import image from '../../assets/images/Zizi-code-png.png';

// icons
import {FcAbout} from 'react-icons/fc';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.isLogged);

  const dispatch = useDispatch();

  function Close(){
    dispatch(logout());
  }

  return (
    <header>
      <div className="logotipo">
        <img src={image} alt="logo" />
      </div>
        <h1>Zizi<span>Poke</span></h1>
      {isLoggedIn.isLogged ? <button onClick={() => Close()}>logate</button> : ''}
      
      <div className='icon'><FcAbout/></div>
    </header>
  )
}

export default Navbar