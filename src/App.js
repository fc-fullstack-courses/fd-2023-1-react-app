import React from 'react';
import './App.css';
import Heading from './components/Heading';
import GreetingDashboard from './components/GreetingDashboard';

class App extends React.Component {
  render() {
    return (
      <>
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
