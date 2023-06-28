import React from 'react';
import usersData from '../../data';
import GreetingList from '../GreetingList';
import FavoriteUsersList from '../FavoriteUsersList';

class GreetingDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: usersData,
      isDirectSort: true,
      favoriteUsers: [],
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
    const { favoriteUsers, users } = this.state;

    const favoriteUser = favoriteUsers.find((user) => user.id === userId);

    if (favoriteUser) {
      return;
    }

    const user = users.find((user) => user.id === userId);

    const newFavoriteList = structuredClone(favoriteUsers);
    newFavoriteList.push(user);

    this.setState({
      favoriteUsers: newFavoriteList,
    });
  };

  render() {
    const { users, isDirectSort, favoriteUsers } = this.state;

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
