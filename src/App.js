import './App.css';
import Heading from './components/Heading';
import Counter from './components/Counter';
import Greeting from './components/Greeting';

function App() {

  const user1 = {
    firstName: 'User',
    lastName: 'Userenko',
    age: 23,
  };

  const user2 = {
    firstName: 'Anton',
    lastName: 'Antonov',
    age: 12,
  };

  const user3 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 9887,
  };

  const isRead1 = true;

  return (
    <>
      <Heading headerText='header text prop' headerTitle='header title prop' />
      <Greeting user={user1} isRead={isRead1} />
      <Greeting user={user2} isRead={true}/>
      <Greeting user={user3} isRead/>
    </>
  );
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
