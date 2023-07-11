import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './Counter.module.scss';

function Counter(props) {
  const [state, setState] = useState({
    count: 0,
  });

  const handleClick = () => {
    setState({
      count: state.count + 1,
    });
  };

  return (
    <section className={styles.container}>
      <p>Count is {state.count}</p>
      <button onClick={handleClick}>Add 1</button>
    </section>
  );
}

export default Counter;
