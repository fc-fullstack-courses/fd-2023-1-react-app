import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'login': {
      const newState = {
        ...state,
        login: action.payload,
      };

      return newState;
    }
    case 'password': {
      const newState = {
        ...state,
        password: action.payload,
      };

      return newState;
    }
    case 'email': {
      const newState = {
        ...state,
        email: action.payload,
      };

      return newState;
    }
    case 'phone': {
      const newState = {
        ...state,
        phone: action.payload,
      };

      return newState;
    }
    case 'name': {
      const newState = {
        ...state,
        name: action.payload,
      };

      return newState;
    }
    default: {
      return state;
    }
  }
}

const initialState = {
  login: '',
  password: '',
  email: '',
  phone: '',
  name: '',
};

const SignUpForm = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // console.log(state);

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
