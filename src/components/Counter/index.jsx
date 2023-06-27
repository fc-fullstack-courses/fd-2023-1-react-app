import React from "react";

class Counter extends React.Component {
  render() {
    // const display = React.createElement('p', {}, `Current count is 0`);
    // const addButton = React.createElement('button', {}, 'Add 1');

    // return React.createElement('section', {}, display, addButton);

    return <section>
      <p>Count is 0</p>
      <button>Add 1</button>
    </section>
  }
}

export default Counter;