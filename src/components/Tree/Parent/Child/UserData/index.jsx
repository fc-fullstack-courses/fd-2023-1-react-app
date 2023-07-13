import classNames from 'classnames';
import styles from './UserData.module.scss';
import CONSTANTS from '../../../../../constants';
import React, { useContext, useMemo, useState } from 'react';
import { ThemeContext, UserContext } from '../../../../../contexts';

const { THEMES } = CONSTANTS;

function longCalculations(value) {
  let i = 0;

  for(let j = 0; j < 3_000_000_000; j++) {
    i++;
  }

  return value ** 2;
}

function UserData(props) {
  const [value, setValue] = useState(1);
  const [theme] = useContext(ThemeContext);
  const user = useContext(UserContext);

  const className = classNames({
    [styles.lightTheme]: theme === THEMES.LIGHT_THEME,
    [styles.darkTheme]: theme === THEMES.DARK_THEME,
  });

  const result = useMemo(() => longCalculations(value), [value]);
  // const result = longCalculations(value);

  return (
    <div
      className={className}
      style={{ padding: '20px', border: '2px solid red' }}
    >
      <h2>UserData</h2>
      <h3>
        {user.firstName} {user.lastName}
      </h3>
      <div>
        <input
          value={value}
          onChange={({ target: { value } }) => setValue(+value)}
        />
        <p>{result}</p>
      </div>
    </div>
  );
}

export default UserData;
