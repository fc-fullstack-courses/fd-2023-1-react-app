import React from 'react';

class Greeting extends React.Component {
  render() {
    const {
      user: { firstName, lastName, age },
      isRead
    } = this.props;

    const readStatusText = isRead ? 'read' : 'not read';

    return (
      <article>
        <h2>
          Hello {firstName} {lastName} with age {age}!
        </h2>
        <p>Message is {readStatusText}</p>
      </article>
    );
  }
}

export default Greeting;
