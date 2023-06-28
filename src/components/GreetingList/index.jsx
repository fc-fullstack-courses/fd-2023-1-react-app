import React from 'react';
import Greeting from '../Greeting';

function GreetingList({ users }) {
  const greetingsArr = users.map((user) => (
    <Greeting key={user.id} user={user} />
  ));

  return <ul>{greetingsArr}</ul>;
}

export default GreetingList;
