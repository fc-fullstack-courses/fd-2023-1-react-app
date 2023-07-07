import classNames from 'classnames';
import { UserContext, ThemeContext } from '../../../../../contexts';
import styles from './UserData.module.scss';
import CONSTANTS from '../../../../../constants';
import React from 'react';

const { THEMES } = CONSTANTS;

function UserData(props) {
  const { user, theme } = props;

  const className = classNames({
    [styles.lightTheme]: theme === THEMES.LIGHT_THEME,
    [styles.darkTheme]: theme === THEMES.DARK_THEME,
  });

  return (
    <div
      className={className}
      style={{ padding: '20px', border: '2px solid red' }}
    >
      <h2>UserData</h2>
      <h3>{user.firstName} {user.lastName}</h3>
    </div>
  );
}

// function UserDataWithUser(props) {
//   return (
//     <UserContext.Consumer>
//       {(user) => <UserData user={user} theme={props.theme} />}
//     </UserContext.Consumer>
//   );
// }

// function UserDataWithUserAndWithTheme(props) {
//   return (
//     <ThemeContext.Consumer>
//       {([theme]) => <UserDataWithUser theme={theme} />}
//     </ThemeContext.Consumer>
//   );
// }

function withTheme(Component) {
  class NewComponent extends React.Component {
    render() {
      return (
        <ThemeContext.Consumer>
          {([theme, switchTheme]) => (
            <Component
              theme={theme}
              switchTheme={switchTheme}
              {...this.props}
            />
          )}
        </ThemeContext.Consumer>
      );
    }
  }

  return NewComponent;
}


const withUser = (Component) => {
  const NewComponent = (props) => {
    return (
      <UserContext.Consumer>
        {(user) => <Component user={user} {...props} />}
      </UserContext.Consumer>
    );
  };
  
  return NewComponent;
};

const UserDataWithTheme = withTheme(UserData);
const UserDataWithThemeAndUser = withUser(UserDataWithTheme);

export default UserDataWithThemeAndUser;
