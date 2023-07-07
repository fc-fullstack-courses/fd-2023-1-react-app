import classNames from 'classnames';
import styles from './UserData.module.scss';
import CONSTANTS from '../../../../../constants';
import React from 'react';
import { withTheme, withUser } from '../../../../../HOCs';

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

const UserDataWithTheme = withTheme(UserData);
const UserDataWithThemeAndUser = withUser(UserDataWithTheme);

export default UserDataWithThemeAndUser;
