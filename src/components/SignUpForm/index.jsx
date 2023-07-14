import React, { useState } from 'react';

const SignUpForm = (props) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');

  function handleChange (e) {
    const { target: {value, name}} = e;
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
      <input type='text' name='login' placeholder='login' value={login} onChange={handleChange} />
      <input type='password' name='password' placeholder='password' />
      <input type='email' name='email' placeholder='email' />
      <input type='text' name='phone' placeholder='phone number' />
      <input type='text' name='name' placeholder='name' />
      <button>Submit</button>
      <button>Reset</button>
    </form>
  );
};

export default SignUpForm;
