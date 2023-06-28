import React from 'react';
import usersData from '../../data';
import GreetingList from '../GreetingList';

class GreetingDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: usersData,
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

  render() {
    const { users, isDirectSort } = this.state;

    return (
      <>
        <div>
          <p>Current sort order is {isDirectSort ? 'direct' : 'reversed'}</p>
          <button onClick={this.sortUsers}>Toggle sorting order</button>
        </div>
        <GreetingList users={users} />
      </>
    );
  }
}

export default GreetingDashboard;