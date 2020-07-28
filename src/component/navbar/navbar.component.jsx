import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo-black.svg';
import './navbar.styles.scss';

const Navbar = () => (
  <div className='navbar' id='navbar'>
    <div className='logo-box'>
      <Link to='/'>
        <Logo className='logo' />
      </Link>
    </div>
    <div className='nav'>
      <Link className='nav-item' to='/'>
        <i className='fa fa-home' aria-hidden='true'></i>&nbsp;HOME
      </Link>
      <Link className='nav-item' to='/about'>
        ABOUT US
      </Link>
    </div>
  </div>
);

export default Navbar;
