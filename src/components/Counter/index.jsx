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
    // this.setState({ count: count + 2 });
    this.setState((state, props) => {
      return {
        count: state.count + 1,
      };
    });
    this.setState((state, props) => {
      return {
        count: state.count + 1,
      };
    });
  };

  render() {
    const { count } = this.state;

    return (
      <section>
        <p>Count is {count}</p>
        <button onClick={this.increment}>Add 2</button>
      </section>
    );
  }
}

export default Counter;
