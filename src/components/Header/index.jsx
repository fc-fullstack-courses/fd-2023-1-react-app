import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/'>To home</Link>
          </li>
          <li>
            <Link to='/about'>To about</Link>
          </li>
          <li>
            <Link to='/contacts'>To contacts</Link>
          </li>
          <li>
            <Link to='/profile'>To profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
