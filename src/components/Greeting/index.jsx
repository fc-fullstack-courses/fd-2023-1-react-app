import React from 'react';

class Greeting extends React.Component {

  render() {
    const { user: {firstName, lastName, age} } = this.props;

    return <h2>Hello {firstName} {lastName} with age {age}!</h2>
  }
}

export default Greeting;