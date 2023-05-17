import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className='nav-bar'>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
    </nav>
  );
}

export default Navigation;