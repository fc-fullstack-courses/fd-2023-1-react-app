import React from 'react';
import './App.css';
import Counter from './components/Counter';
import SignUpForm from './components/SignUpForm';
import GreetingDashboard from './components/GreetingDashboard';
import Heading from './components/Heading';
import Greeting from './components/Greeting';

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
        {/* <Greeting
          user={{
            firstName: 'adsa',
            lastName: 'asdsad',
            age: 123,
            id: 12321,
            password: 'asd233e23dsa',
          }}
          makeFavorite={() => {}}
          deleteUser={() => {}}
        /> */}
      </>
    );
  }
}

export default App;
