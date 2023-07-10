import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import { UserContext, ThemeContext } from './contexts';

import CONSTANTS from './constants';
import HomePage from './pages/HomePage';

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
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>

          <Route path='/about'>
            {(routeProps) => <AboutPage {...routeProps} />}
          </Route>

          <Route
            path='/contacts'
            render={(routeProps) => <ContactsPage {...routeProps} />}
          />

          <Route path='/profile' component={ProfilePage} />

          <Route path='*' component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

function ContactsPage(props) {
  console.log(props);
  return <div>CONTACTS</div>;
}

function AboutPage(props) {
  console.log(props);
  return <div>ABOUT US</div>;
}

function ProfilePage(props) {
  console.log(props);
  return <div>PROFILE</div>;
}

function NotFoundPage(props) {
  return <div>404. Page not found</div>;
}

export default App;
