import React from 'react';
import Greeting from '../Greeting';

function GreetingList({ users, callback, makeFavorite }) {
  const greetingsArr = users.map((user) => (
    <Greeting key={user.id} user={user} makeFavorite={makeFavorite} />
  ));

  return (
    <>
      <button onClick={callback}>Change parent</button>
      <ul>{greetingsArr}</ul>;
    </>
  );
}

export default GreetingList;
