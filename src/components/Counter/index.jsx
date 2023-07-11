import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './Counter.module.scss';

function Counter(props) {
  const [state, setState] = useState({
    count: 0,
    x: 0,
    y: 0
  });

  const handleClick = () => {
    setState({
      ...state,
      count: state.count + 1,
    });
  };

  const handleMouseMove = (e) => {
    const {clientX, clientY} = e;

    setState({
      ...state,
      x: clientX,
      y: clientY
    });
  }

  return (
    <section onMouseMove={handleMouseMove} className={styles.container}>
      <p>Count is {state.count}</p>
      <p>X is {state.x}</p>
      <p>Y is {state.y}</p>
      <button onClick={handleClick}>Add 1</button>
    </section>
  );
}

export default Counter;
