import React from 'react';
import Header from '../../components/Header';
import Counter from '../../components/Counter';
import GreetingDashboard from '../../components/GreetingDashboard';

const HooksPage = (props) => {
  return (
    <div>
      <Header />
      <h1>HooksPage</h1>
      <Counter/>
      <GreetingDashboard />
    </div>
  );
};

export default HooksPage;
