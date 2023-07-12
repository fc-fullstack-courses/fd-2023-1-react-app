import React from 'react';
import GreetingDashboard from '../../components/GreetingDashboard';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

const HomePage = (props) => {
  return (
    <div>
      <Header />
      <h1>HomePage</h1>
      <Sidebar />
    </div>
  );
};

export default HomePage;
