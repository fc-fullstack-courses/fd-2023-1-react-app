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
          <li>
            <Link to='/posts'>To posts</Link>
          </li>
          <li>
            <Link to='/signup'>To sign up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
