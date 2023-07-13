import React from 'react';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';

function StopWatch(props) {
  const [startTime, setStartTime] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());
  const [differenceTime, setDifferenceTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    return () => {
      deleteInterval();
    };
  }, []);

  function deleteInterval() {
    if (intervalId) {
      setIntervalId((intervalId) => {
        clearInterval(intervalId);

        return null;
      });
    }
  }

  const startTimer = () => {
    setCurrentTime(new Date());
    setStartTime(new Date() - differenceTime);
    if (!intervalId) {
      const newIntervalId = setInterval(() => setCurrentTime(new Date()), 1);
      setIntervalId(newIntervalId);
    }
  };

  const pauseTimer = () => {
    deleteInterval();
    setDifferenceTime(currentTime - startTime);
  };

  const clearTimer = () => {
    setStartTime(new Date());
    setCurrentTime(new Date());
    setDifferenceTime(0);
    deleteInterval();
  };

  return (
    <>
      <div>
        <p>{format(currentTime - startTime, 'HH : mm : ss : SSS')}</p>
      </div>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={clearTimer}>Clear</button>
    </>
  );
}

export default StopWatch;
