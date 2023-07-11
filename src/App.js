import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import { UserContext, ThemeContext } from './contexts';
import Sidebar from './components/Sidebar';
import CONSTANTS from './constants';
import HomePage from './pages/HomePage';
import HooksPage from './pages/HooksPage';

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
    const { user, theme } = this.state;
    return (
      <BrowserRouter>
        <ThemeContext.Provider value={[theme, this.switchTheme]}>
          <UserContext.Provider value={user}>
            <Switch>
              <Route exact path='/'>
                <HomePage />
              </Route>

              {/* <Route path='/about'>
                {(routeProps) => <AboutPage {...routeProps} />}
              </Route>

              <Route
                path='/contacts'
                render={(routeProps) => <ContactsPage {...routeProps} />}
              />

              <Route path='/profile' component={ProfilePage} /> */}
              <Route path='/hooks' component={HooksPage} />

              <Route path='*' component={NotFoundPage} />
            </Switch>
          </UserContext.Provider>
        </ThemeContext.Provider>
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
