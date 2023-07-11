import React, { useState } from 'react';
import usersData from '../../data';
import GreetingList from '../GreetingList';
import FavoriteUsersList from '../FavoriteUsersList';

const usersWithFavorite = usersData.map((user) => {
  return {
    ...user,
    isFavorite: false,
  };
});
// Переделать компонент на функциональный. Состояние сделать на хуках
function GreetingDashboard(props) {
  const [users, setUsers] = useState(usersWithFavorite);
  const [isDirectSort, setIsDirectSort] = useState(true);

  const sortUsers = () => {
    const usersCopy = structuredClone(users);

    usersCopy.sort((a, b) => {
      if (isDirectSort) {
        return b.id - a.id;
      }

      return a.id - b.id;
    });

    setUsers(usersCopy);
    setIsDirectSort(!isDirectSort);
  };

  const makeFavorite = (userId) => {
    const newUsers = users.map((user) => {
      if (user.id !== userId) {
        return user;
      }

      return {
        ...user,
        isFavorite: true,
      };
    });

    setUsers(newUsers);
  };

  const deleteUser = (userId) => {
    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers);
  };

  const favoriteUsers = users.filter((user) => user.isFavorite);

  return (
    <>
      <div>
        <p>Current sort order is {isDirectSort ? 'direct' : 'reversed'}</p>
        <button onClick={sortUsers}>Toggle sorting order</button>
      </div>
      <GreetingList
        users={users}
        callback={sortUsers}
        makeFavorite={makeFavorite}
        deleteUser={deleteUser}
      />
      <hr />
      <FavoriteUsersList users={favoriteUsers} />
    </>
  );
}

/*

  Добавить компоненту Greeting кнопку удаления пользователя.
  Если на неё нажать то пользователь и приветствие для него (в GreetingList) должны исчезнуть

*/

export default GreetingDashboard;
