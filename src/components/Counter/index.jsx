import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from './Counter.module.scss';

function Counter(props) {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
  });

  useEffect(function createEffects() {
    // createEffects = componentDidMount + componentDidUpdate
    console.log('createEffects');

    // clearEffects ~= componentWillUnmount + также запускается при каждой отрисовке компонента перед createEffects
    return function clearEffects() {
      console.log('clearEffects');
    };
  });

  const handleClick = () => {
    console.log('increment');
    setCount((currentCount) => {
      return currentCount + 1;
    });
  };

  const startAutoClicks = () => {
    if (!intervalId) {
      const newIntervalId = setInterval(handleClick, 1000);

      setIntervalId(newIntervalId);
    }
  };

  const stopAutoClicks = () => {
    setIntervalId((intervalId) => {
      clearInterval(intervalId);

      return null;
    });
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    setCoords({
      x: clientX,
      y: clientY,
    });
  };

  return (
    <section onMouseMove={handleMouseMove} className={styles.container}>
      <p>Count is {count}</p>
      <p>X is {coords.x}</p>
      <p>Y is {coords.y}</p>
      <button onClick={handleClick}>Add 1</button>
      <button onClick={startAutoClicks}>Start autoclicks</button>
      <button onClick={stopAutoClicks}>Stop autoclicks</button>
    </section>
  );
}

export default Counter;
