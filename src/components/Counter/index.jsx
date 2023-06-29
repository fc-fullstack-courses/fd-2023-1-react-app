import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    const { count } = this.state;
    this.setState({count: count + 1})
  }

  render() {
    const { count } = this.state;

    return (
      <section>
        <p>Count is {count}</p>
        <button onClick={this.increment}>Add 1</button>
      </section>
    );
  }
}

export default Counter;
