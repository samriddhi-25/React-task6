import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      
    
    
      <nav className="navbar">
      
        <ul className="nav-list">
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home🏡
            </NavLink>
          </li>
          <br/>
          <li>
            <NavLink to="/about" activeClassName="active">
              About🙋
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" activeClassName="active">
              Projects📽
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact🤳
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
