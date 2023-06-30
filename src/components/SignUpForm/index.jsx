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
      comment: '',
      accountLevel: 'advanced',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.elements.login.value);

    // signUp();
  };

  // handleLoginChange = (e) => {
  //   const {
  //     target: { value },
  //   } = e;

  //   this.setState({
  //     login: value,
  //   });
  // };

  handleChange = (e) => {
    const {
      target: { value, name },
    } = e;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { login, email, password, comment, accountLevel } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='login'
          placeholder='login'
          value={login}
          onChange={this.handleChange}
        />
        <input
          type='email'
          name='email'
          placeholder='email'
          value={email}
          onChange={this.handleChange}
        />
        <input
          type='password'
          name='password'
          placeholder='password'
          value={password}
          onChange={this.handleChange}
        />
        <textarea
          name='comment'
          cols='30'
          rows='10'
          value={comment}
          onChange={this.handleChange}
        />
        <select
          name='accountLevel'
          value={accountLevel}
          onChange={this.handleChange}
        >
          <option value='basic'>basic level</option>
          <option value='advanced'>advanced level</option>
          <option value='admin'>admin level</option>
        </select>
        <button type='submit'>SignUp</button>
      </form>
    );
  }
}

export default SignUpForm;
