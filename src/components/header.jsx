import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import logo from '../assets/static/logo-platzi-video.png';

import '../assets/styles/components/header.scss';

const Header = () => (
  <header>
    <nav className='d-flex justify-content-between align-items-center'>
      <a href='#'>
        <img id='logo' src={logo} alt='Platzivideo' />
      </a>
      <div className='menu d-flex flex-column align-items-end'>
        <div className='menu__profile d-flex align-items-center pb-2'>
          <FontAwesomeIcon icon={faUserCircle} size='2x' />
          <span className='pl-2'>Perfil</span>
        </div>
        <ul className='text-right'>
          <li>
            <a href='#'>Cuenta</a>
          </li>
          <li>
            <a href='#'>Cerrar Sesión</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
