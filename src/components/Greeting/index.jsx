import React from 'react';

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isRead: false,
    };
  }

  render() {
    const {
      user: { firstName, lastName, age },
    } = this.props;
    const { isRead } = this.state;

    const readStatusText = isRead ? 'read' : 'not read';

    const handleClick = (e) => {
      // this.state.isRead = true; неправильно
      const stateChanges = {
        isRead: true,
      };
      this.setState(stateChanges);
    };

    return (
      <article>
        <h2>
          Hello {firstName} {lastName} with age {age}!
        </h2>
        <p>Message is {readStatusText}</p>
        <button id='btn' onClick={handleClick}>
          Read greeting
        </button>
      </article>
    );
  }
}

export default Greeting;
