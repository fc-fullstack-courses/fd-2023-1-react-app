import React, { useReducer } from 'react';

const initialState = {
  count: 0,
  step: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case 'add': {
      const newState = {
        ...state,
        count: state.count + state.step,
      };
      return newState;
    }
    case 'subtract': {
      const newState = {
        ...state,
        count: state.count - state.step,
      };
      return newState;
    }
    case 'reset': {
      return initialState;
    }
    case 'changeStep': {
      const newState = {
        ...state,
        step: +action.payload,
      };

      return newState;
    }
    default: {
      return state;
    }
  }
}

const ReducerCounter = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const add = () => {
    const action = { type: 'add' };
    dispatch(action);
  };

  const subtract = () => {
    const action = { type: 'subtract' };
    dispatch(action);
  };

  const reset = () => {
    const action = { type: 'reset' };
    dispatch(action);
  };

  const changeStep = (e) => {
    const action = { type: 'changeStep', payload: e.target.value };
    dispatch(action);
  };

  return (
    <div>
      <p>Count is {state.count}</p>
      <p>Step is {state.step}</p>
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
      <button onClick={reset}>Reset</button>
      <input type='number' value={state.step} onChange={changeStep} />
    </div>
  );
};

/*
  Создать компонент счетчика, работающего на хуке useReducer
  При этом должна быть возможность настройки шага счетчика и его сброса

  1. состояние должно иметь свойства count и step
  2. счет можно делать как в положительную так и в отрицательную сторону
  3. настройка шага это отдельный action
  4. у action могут быть разные формы
*/

export default ReducerCounter;
