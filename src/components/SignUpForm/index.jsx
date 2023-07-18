import React from 'react';
import * as yup from 'yup';

const NAME_SCHEMA = yup.string().matches(/^[A-Z][a-z]{0,64}$/);

const USER_SCHEMA = yup.object({
  firstName: NAME_SCHEMA,
  lastName: NAME_SCHEMA,
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#$!%^&]).{8,32}$/, 'Password must have 1 Upper and 1 lowercase letter, 1 number and 1 symbol')
    .required(),
});

const user1 = {
  firstName: 'User',
  lastName: 'Userenko',
  email: 'mail@mail.com',
  password: 'User1IsBest$$##'
};

const user2 = {
  firstName: 545,
  email: 'user2',
  password: '12345admin'
};

const SignUpForm = (props) => {

  // console.group();
  // // Возвращают булевое значение, подходит ли обьект под схему
  // console.log('User 1 isValid');
  // console.log(USER_SCHEMA.isValid(user1));
  // console.log('User 1 isValidSync');
  // console.log(USER_SCHEMA.isValidSync(user1));
  // console.log('User 2 isValid');
  // console.log(USER_SCHEMA.isValid(user2));
  // console.log('User 2 isValidSync');
  // console.log(USER_SCHEMA.isValidSync(user2));
  // console.groupEnd();

  console.group();
  // Возвращают либо прошедший проверку обьект или ошибку
  console.log('User 1 validate');
  console.log(USER_SCHEMA.validate(user1));
  console.log('User 1 validateSync');
  console.log(USER_SCHEMA.validateSync(user1));
  console.log('User 2 validate');
  console.log(USER_SCHEMA.validate(user2));
  console.log('User 2 validateSync');
  console.log(USER_SCHEMA.validateSync(user2));
  console.groupEnd();

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '400px',
        padding: '20px',
      }}
    >
      {/* <input
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
      /> */}
      <button>Submit</button>
      <button>Reset</button>
    </form>
  );
};

export default SignUpForm;
