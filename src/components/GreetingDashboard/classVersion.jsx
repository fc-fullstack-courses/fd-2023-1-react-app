import React from 'react';
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
class GreetingDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: usersWithFavorite,
      isDirectSort: true,
    };

    // this.sortUsers = this.sortUsers.bind(this);
  }

  sortUsers = () => {
    const { isDirectSort, users } = this.state;

    /*
      1. взять массив
      2. перевернуть его
      3. обновить состояние
    */

    // const copy = [...users];

    // const deepCopy = JSON.parse(JSON.stringify(users));
    const usersCopy = structuredClone(users);

    // usersCopy.reverse();

    usersCopy.sort((a, b) => {
      if (isDirectSort) {
        return b.id - a.id;
      }

      return a.id - b.id;
    });

    this.setState({
      users: usersCopy,
      isDirectSort: !isDirectSort,
    });
  };

  makeFavorite = (userId) => {
    const { users } = this.state;

    const newUsers = users.map((user) => {
      if (user.id !== userId) {
        return user;
      }

      return {
        ...user,
        isFavorite: true,
      };
    });

    this.setState({
      users: newUsers,
    });
  };

  deleteUser = (userId) => {
    const { users } = this.state;

    const newUsers = users.filter((user) => user.id !== userId);

    this.setState({ users: newUsers });
  };

  render() {
    const { users, isDirectSort } = this.state;

    const favoriteUsers = users.filter((user) => user.isFavorite);

    return (
      <>
        <div>
          <p>Current sort order is {isDirectSort ? 'direct' : 'reversed'}</p>
          <button onClick={this.sortUsers}>Toggle sorting order</button>
        </div>
        <GreetingList
          users={users}
          callback={this.sortUsers}
          makeFavorite={this.makeFavorite}
          deleteUser={this.deleteUser}
        />
        <hr />
        <FavoriteUsersList users={favoriteUsers} />
      </>
    );
  }
}

/*

  Добавить компоненту Greeting кнопку удаления пользователя.
  Если на неё нажать то пользователь и приветствие для него (в GreetingList) должны исчезнуть

*/

export default GreetingDashboard;
