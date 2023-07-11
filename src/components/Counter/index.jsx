import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './Counter.module.scss';

function Counter(props) {
  const [count, setCount] = useState(0);
  const [coords, setCoords] = useState({
    x: 0,
    y: 0
  });

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleMouseMove = (e) => {
    const {clientX, clientY} = e;

    setCoords({
      x: clientX,
      y: clientY
    });
  }

  return (
    <section onMouseMove={handleMouseMove} className={styles.container}>
      <p>Count is {count}</p>
      <p>X is {coords.x}</p>
      <p>Y is {coords.y}</p>
      <button onClick={handleClick}>Add 1</button>
    </section>
  );
}

export default Counter;
