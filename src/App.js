import React from 'react';
import './App.css';
import Heading from './components/Heading';
import Counter from './components/Counter';
import Greeting from './components/Greeting';

const usersData = [
  {
    id: 0,
    firstName: 'User',
    lastName: 'Userenko',
    age: 23,
  },

  {
    id: 1,
    firstName: 'Anton',
    lastName: 'Antonov',
    age: 12,
  },

  {
    id: 2,
    firstName: 'John',
    lastName: 'Doe',
    age: 9887,
  },
];
class App extends React.Component {
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

    const greetingsArr = users.map((user) => (
      <Greeting key={user.id} user={user} />
    ));

    return (
      <>
        <Heading
          headerText='header text prop'
          headerTitle='header title prop'
        />
        <div>
          <p>Current sort order is {isDirectSort ? 'direct' : 'reversed'}</p>
          <button onClick={this.sortUsers}>Toggle sorting order</button>
        </div>
        {greetingsArr}
      </>
    );
  }
}

/*
      <Greeting firstName='User' lastName='Userenko' age={23} />
      <Greeting firstName='Anton' lastName='Antonov' age={12} />
      <Greeting firstName='Anna' lastName='LastName1' age={32} />
      <Greeting firstName='John' lastName='Doe' age={9887} />

*/

/*
  Доработайте Greeting
    он должен также принимать: 
      фамилию 
      возраст
    и показывать все это в сообщении
    * все входящие данные передавать в одном пропсе data
*/

export default App;
