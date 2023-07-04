import React from 'react';
import PropTypes from 'prop-types';

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
      makeFavorite,
      deleteUser,
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
          <button onClick={() => deleteUser(id)}>Delete</button>
        </article>
      </li>
    );
  }
}

// const userObjectProp = PropTypes.shape({
//   firstName: PropTypes.string.isRequired,
//   lastName: PropTypes.string.isRequired,
//   age: PropTypes.number.isRequired,
//   id: PropTypes.number.isRequired,
// });

export const userObjectProp = PropTypes.exact({
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool,
});

Greeting.propTypes = {
  makeFavorite: PropTypes.func.isRequired,
  makeFavorite: PropTypes.func.isRequired,
  user: userObjectProp.isRequired,
};

function ReadMessage() {
  return <p>Message is read</p>;
}

function NotReadMessage() {
  return <p>Message is not read</p>;
}

export default Greeting;
