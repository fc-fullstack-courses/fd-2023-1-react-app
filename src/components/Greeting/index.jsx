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
      user: { firstName, lastName, age, id },
      makeFavorite
    } = this.props;
    const { isRead } = this.state;

    // const readStatusText = isRead ? 'read' : 'not read';

    const handleClick = (e) => {
      // this.state.isRead = true; неправильно
      const stateChanges = {
        isRead: true,
      };
      this.setState(stateChanges);
    };

    const readParagraph = isRead ? <ReadMessage /> : <NotReadMessage />;

    return (
      <li>
        <article>
          <h2>
            Hello {firstName} {lastName} with age {age}!
          </h2>
          {/* <p>Message is {readStatusText}</p> */}
          {readParagraph}
          {/* {isRead ? null : <button onClick={handleClick}>Read greeting</button>} */}
          {!isRead && <button onClick={handleClick}>Read greeting</button>}
          <button onClick={() => makeFavorite(id)}>Make favorite</button>
        </article>
      </li>
    );
  }
}

function ReadMessage() {
  return <p>Message is read</p>;
}

function NotReadMessage() {
  return <p>Message is not read</p>;
}

export default Greeting;
