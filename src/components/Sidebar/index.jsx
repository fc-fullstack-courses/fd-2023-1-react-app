import React from 'react';
import classNames from 'classnames';
import { withTheme, withUser } from '../../HOCs';
import styles from './Sidebar.module.scss';
import CONSTANTS from '../../constants';
const { THEMES } = CONSTANTS;

const Sidebar = (props) => {
  const { theme, switchTheme, user } = props;

  const className = classNames({
    [styles.lightTheme]: theme === THEMES.LIGHT_THEME,
    [styles.darkTheme]: theme === THEMES.DARK_THEME,
  });

  const changeTheme = (e) => {
    const {
      target: { value },
    } = e;

    switchTheme(value);
  };

  return (
    <div
      className={className}
      style={{
        padding: '20px',
        border: '2px solid black',
        maxWidth: '500px',
      }}
    >
      <h2>Sidebar</h2>
      <p>Your email is: {user.email}</p>

      <select value={theme} onChange={changeTheme}>
        <option value={THEMES.LIGHT_THEME}>Light Theme</option>
        <option value={THEMES.DARK_THEME}>Dark Theme</option>
      </select>
    </div>
  );
};

const SidebarWithAll = withTheme(withUser(Sidebar));

export default SidebarWithAll;

// rafce
// rcce
// rccp
