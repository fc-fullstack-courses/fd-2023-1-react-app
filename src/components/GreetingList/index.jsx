import React from 'react';
import Greeting, { userObjectProp } from '../Greeting';
import PropTypes from 'prop-types';

function GreetingList({ users, callback, makeFavorite, deleteUser }) {
  const greetingsArr = users.map((user) => (
    <Greeting
      key={user.id}
      user={user}
      makeFavorite={makeFavorite}
      deleteUser={deleteUser}
    />
  ));

  return (
    <>
      <button onClick={callback}>Change parent</button>
      <ul>{greetingsArr}</ul>;
    </>
  );
}

GreetingList.propTypes = {
  users: PropTypes.arrayOf(userObjectProp),
};

export default GreetingList;
