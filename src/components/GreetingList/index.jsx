import React from 'react';
import Greeting, { userObjectProp } from '../Greeting';
import PropTypes from 'prop-types';

function GreetingList({ users, callback, ...rest }) {
  const greetingsArr = users.map((user) => (
    <Greeting key={user.id} user={user} {...rest} />
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
