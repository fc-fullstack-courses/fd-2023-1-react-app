import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import { UserContext, ThemeContext } from './contexts';

import CONSTANTS from './constants';

const { THEMES } = CONSTANTS;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isCounterVisible: true,
      user: {
        id: 1,
        firstName: 'User',
        lastName: 'Userenko',
        email: 'user@mail.com',
      },
      theme: THEMES.DARK_THEME,
    };
  }

  toggleVisibility = () => {
    this.setState({
      isCounterVisible: !this.state.isCounterVisible,
    });
  };

  switchTheme = (newTheme) => {
    this.setState({ theme: newTheme });
  };

  render() {
    return (
      <BrowserRouter>
        <header>
          <nav>
            <ul>
              <li><Link to='/'>To home</Link></li>
              <li><Link to='/about'>To about</Link></li>
              <li><Link to='/contacts'>To contacts</Link></li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>

          <Route path='/about'>
            <AboutPage />
          </Route>

          <Route path='/contacts'>
            <ContactsPage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

function HomePage() {
  return <div>HOME</div>;
}

function ContactsPage() {
  return <div>CONTACTS</div>;
}

function AboutPage() {
  return <div>ABOUT US</div>;
}

export default App;
