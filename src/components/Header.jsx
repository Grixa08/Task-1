import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Заметки</h1>
      <nav className="main-nav">
        <ul>
          <li>
            <NavLink 
              to="/" 
            >
              Список заметок
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/create" 
            >
              Создать заметку
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header; 