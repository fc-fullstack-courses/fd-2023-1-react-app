import React from 'react';
import GreetingDashboard from '../../components/GreetingDashboard';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import StopWatch from '../../components/StopWatch';
import UserData from '../../components/Tree/Parent/Child/UserData';
import ReducerCounter from '../../components/ReducerCounter';

const HomePage = (props) => {
  return (
    <div>
      <Header />
      <h1>HomePage</h1>
      <ReducerCounter />
      <UserData />
      <Sidebar />
      <StopWatch />
    </div>
  );
};

export default HomePage;
