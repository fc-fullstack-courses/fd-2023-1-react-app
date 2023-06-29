import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      intervalId: null,
    };
  }

  increment = () => {
    // const { count } = this.state;
    // this.setState({ count: count + 2 });
    this.setState((state, props) => {
      return {
        count: state.count + 1,
      };
    });
    // this.setState((state, props) => {
    //   return {
    //     count: state.count + 1,
    //   };
    // });
  };

  startAutoClicks = () => {
    if(!this.state.intervalId) {
      const intervalId = setInterval(this.increment, 1000);
  
      this.setState({ intervalId });
    }
  };

  stopAutoClicks = () => {
    const { intervalId } = this.state;
    clearInterval(intervalId);
    this.setState({ intervalId: null });
  };

  render() {
    const { count, intervalId } = this.state;

    return (
      <section>
        <p>Count is {count}</p>
        <p>Autoclicks is {intervalId ? 'enabled' : 'disabled'}</p>
        <button onClick={this.increment}>Add 1</button>
        <button onClick={this.startAutoClicks}>Enable autoclicks</button>
        <button onClick={this.stopAutoClicks}>Disable autoclicks</button>
      </section>
    );
  }
}

export default Counter;
