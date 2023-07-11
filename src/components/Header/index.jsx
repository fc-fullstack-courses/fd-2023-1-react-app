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
            <Link to='/hooks'>To hook example page</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
