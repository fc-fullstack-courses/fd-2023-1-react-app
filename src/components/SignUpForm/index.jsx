import React, { useReducer } from 'react';
import reducer from './reducer';

const initialState = {
  login: '',
  password: '',
  email: '',
  phone: '',
  name: '',
};

const SignUpForm = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleChange(e) {
    const {
      target: { value, name },
    } = e;

    const action = { type: name, payload: value };

    dispatch(action);
  }

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '400px',
        padding: '20px',
      }}
    >
      <input
        type='text'
        name='login'
        placeholder='login'
        value={state.login}
        onChange={handleChange}
      />
      <input
        type='password'
        name='password'
        placeholder='password'
        value={state.password}
        onChange={handleChange}
      />
      <input
        type='email'
        name='email'
        placeholder='email'
        value={state.email}
        onChange={handleChange}
      />
      <input
        type='text'
        name='phone'
        placeholder='phone number'
        value={state.phone}
        onChange={handleChange}
      />
      <input
        type='text'
        name='name'
        placeholder='name'
        value={state.name}
        onChange={handleChange}
      />
      <button>Submit</button>
      <button>Reset</button>
    </form>
  );
};

export default SignUpForm;
