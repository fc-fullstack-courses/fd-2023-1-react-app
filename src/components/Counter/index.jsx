import React from 'react';
import classNames from 'classnames';
import styles from './Counter.module.scss';

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
    const { count, intervalId, theme } = this.state;

    

    const addBtnClassNames = classNames(styles.btn);
    const startAutoClicksClassNames = classNames(styles.btn, styles.greenText);
    const stopAutoClicksClassNames = classNames(styles.btn, styles.redText);

    const autoClicksStatusClassNames = classNames(styles.autoClicksStatus, {
      [styles.greenText] : intervalId,
      [styles.redText]: !intervalId,
      [styles.darkTheme]: theme === 'dark',
      [styles.lightTheme]: theme === 'light',
      [styles.greenTheme]: theme === 'green',
    });

    return (
      <section className={styles.container}>
        <p>Count is {count}</p>
        <p>
          Autoclicks is{' '}
          <span className={autoClicksStatusClassNames}>
            {intervalId ? 'enabled' : 'disabled'}
          </span>
        </p>
        <button onClick={this.increment} className={addBtnClassNames}>
          Add 1
        </button>
        <button
          onClick={this.startAutoClicks}
          className={startAutoClicksClassNames}
        >
          Enable autoclicks
        </button>
        <button
          onClick={this.stopAutoClicks}
          className={stopAutoClicksClassNames}
        >
          Disable autoclicks
        </button>
      </section>
    );
  }
}

export default Counter;
