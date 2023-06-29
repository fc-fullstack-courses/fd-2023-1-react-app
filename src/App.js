import React from 'react';
import './App.css';
import Heading from './components/Heading';
import GreetingDashboard from './components/GreetingDashboard';
import Counter from './components/Counter';

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
        <button onClick={this.toggleVisibility}>
          Toggle counter visibility
        </button>
        {isCounterVisible && <Counter />}
        <Heading
          headerText='header text prop'
          headerTitle='header title prop'
        />
        <GreetingDashboard />
      </>
    );
  }
}

export default App;
