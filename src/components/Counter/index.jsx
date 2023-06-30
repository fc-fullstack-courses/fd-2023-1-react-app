import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      intervalId: null,
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.startAutoClicks();
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('componentDidUpdate');

    if (Math.random > 0.5) {
      // можно но только по условию
      // this.setState()
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    this.stopAutoClicks();
  }

  increment = () => {
    // const { count } = this.state;
    // this.setState({ count: count + 2 });
    // console.log('increment');
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
    if (!this.state.intervalId) {
      const intervalId = setInterval(this.increment, 1000);

      this.setState({ intervalId });
    }
  };

  stopAutoClicks = () => {
    this.setState((state) => {
      const { intervalId } = state;
      console.log(`stopAutoClicks intervalId is ${intervalId}`);
      clearInterval(intervalId);

      return { intervalId: null };
    });
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
