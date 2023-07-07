import React from 'react';
import { UserContext } from '../../contexts';

const Sidebar = (props) => {
  return (
    <UserContext.Consumer>
      {(user) => (
        <div
          style={{
            padding: '20px',
            border: '2px solid black',
            maxWidth: '500px',
          }}
        >
          <h2>Sidebar</h2>
          <p>Your email is: {user.email}</p>
        </div>
      )}
    </UserContext.Consumer>
  );
};

export default Sidebar;

// rafce
// rcce
// rccp
