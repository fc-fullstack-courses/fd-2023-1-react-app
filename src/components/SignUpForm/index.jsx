import React from 'react';

function signUp(userData) {
  const { login, email, password } = userData;
  // some logic

  if ((!login, !email, !password)) {
    throw new Error('invalid data');
  }

  alert('user created!');
}

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      email: '',
      password: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.elements.login.value);

    // signUp();
  };

  handleLoginChange = (e) => {
    const {
      target: { value },
    } = e;

    console.log(value);
    this.setState({
      login: value,
    });
  };

  render() {
    const { login } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='login'
          placeholder='login'
          value={login}
          onChange={this.handleLoginChange}
        />
        <input type='email' name='email' placeholder='email' />
        <input type='password' name='password' placeholder='password' />

        <button type='submit'>SignUp</button>
      </form>
    );
  }
}

export default SignUpForm;
