import React from "react";
import { ThemeContext, UserContext } from "../contexts";

export function withTheme(Component) {
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


export const withUser = (Component) => {
  const NewComponent = (props) => {
    return (
      <UserContext.Consumer>
        {(user) => <Component user={user} {...props} />}
      </UserContext.Consumer>
    );
  };
  
  return NewComponent;
};