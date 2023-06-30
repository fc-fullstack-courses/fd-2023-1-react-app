import React from 'react';
import './App.css';
import picSrc from './logo.svg';
import Counter from './components/Counter';
import SignUpForm from './components/SignUpForm';

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
        <SignUpForm />
        <img src={picSrc}/>
      </>
    );
  }
}

export default App;
