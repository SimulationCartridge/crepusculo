import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className='navbar'>
        <NavLink className="navLink" exact to="/">Home</NavLink>
        <NavLink className="navLink" to="/menu">Menu</NavLink>
        <NavLink className="navLink" to="/contacto">Contacto</NavLink>   
        <div className="animation start-home"></div>
    </nav>
  );
}

export default Navigation;