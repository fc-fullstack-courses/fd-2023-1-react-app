import React from 'react';
import './App.css';
import Counter from './components/Counter';
import SignUpForm from './components/SignUpForm';
import GreetingDashboard from './components/GreetingDashboard';
import Heading from './components/Heading';
import Greeting from './components/Greeting';
import List from './components/List';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isCounterVisible: true,
    };
  }

  toggleVisibility = () => {
    this.setState({
      isCounterVisible: !this.state.isCounterVisible,
    });
  };

  render() {
    const { isCounterVisible } = this.state;

    return (
      <>
        <Heading headerText={'asdsadsdas'} headerTitle='adsada' />
        <button onClick={this.toggleVisibility}>
          Toggle counter visibility
        </button>
        {isCounterVisible && <Counter />}
        <SignUpForm />
        <GreetingDashboard />
        <List listTitle='Продукты'>
          <li>Хлеб</li>
          <li>Молоко</li>
        </List>
        <List listTitle='задачи'>
          <li>помыть посуду</li>
          <li>выгулять кота</li>
        </List>
      </>
    );
  }
}

export default App;
