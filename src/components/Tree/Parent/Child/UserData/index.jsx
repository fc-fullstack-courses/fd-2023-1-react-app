import classNames from 'classnames';
import { UserContext, ThemeContext } from '../../../../../contexts';
import styles from './UserData.module.scss';
import CONSTANTS from '../../../../../constants';

const { THEMES } = CONSTANTS;

function UserData(props) {
  return (
    <UserContext.Consumer>
      {(user) => (
        <ThemeContext.Consumer>
          {([theme]) => {
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
                <h3>
                  {user.firstName} {user.lastName}
                </h3>
              </div>
            );
          }}
        </ThemeContext.Consumer>
      )}
    </UserContext.Consumer>
  );
}

export default UserData;
