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

  // неправильно!
  // if (Math.random() > 0.6) {
  //   useEffect();
  // }

  // правильно
  useEffect(() => {
    if (Math.random() > 0.6) {
    }
  });

  useEffect(
    function createEffects() {
      // createEffects = componentDidMount + componentDidUpdate
      console.log('createEffects');
      document.addEventListener('click', handleClick);
      // clearEffects ~= componentWillUnmount + также запускается при каждой отрисовке компонента перед createEffects
      return function clearEffects() {
        console.log('clearEffects');
        document.removeEventListener('click', handleClick);
      };
    },
    [count]
  );

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  function handleClick() {
    console.log(`count is ${count}`);
    console.log(`next count is ${count + 1}`);
    setCount(count + 1);
  }

  // function handleClick() {
  //   setCount((count) => {
  //     console.log(`count is ${count}`);
  //     console.log(`next count is ${count + 1}`);

  //     return count + 1;
  //   });
  // }

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

  function handleMouseMove(e) {
    const { clientX, clientY } = e;

    setCoords({
      x: clientX,
      y: clientY,
    });
  }

  return (
    <section className={styles.container}>
      <p>Count is {count}</p>
      <p>X is {coords.x}</p>
      <p>Y is {coords.y}</p>
      <button>Add 1</button>
      <button onClick={startAutoClicks}>Start autoclicks</button>
      <button onClick={stopAutoClicks}>Stop autoclicks</button>
    </section>
  );
}

// плохо
function test() {
  // const [value, setValue] = useState();
}

// нормально
function Test(props) {
  const [value, setValue] = useState();

  return <div></div>;
}

export default Counter;
