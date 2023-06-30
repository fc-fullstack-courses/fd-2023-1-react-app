import React from 'react';

function signUp(userData) {
  const { login, email, password } = userData;
  // some logic

  if ((!login, !email, !password)) {
    throw new Error('invalid data');
  }

  alert('user created!');
}

const initialState = {
  login: '',
  email: '',
  password: '',
  comment: '',
  accountLevel: 'advanced',
  isSubscribed: false,
  gender: 'male',
};

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...initialState,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.elements.login.value);

    // signUp();

    this.setState({
      ...initialState,
    });
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
      target: { value, name, type, checked },
    } = e;

    const newValue = type === 'checkbox' ? checked : value;

    this.setState({
      [name]: newValue,
    });
  };

  render() {
    const {
      login,
      email,
      password,
      comment,
      accountLevel,
      isSubscribed,
      gender,
    } = this.state;

    const btnStyles = {
      color: email !== '' ? 'green' : 'red',
      padding: '15px',
      fontSize: '1.5rem',
      fontWeight: 'bold',
    };

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
        <fieldset>
          <legend>Choose your gender:</legend>
          <label>
            <input
              type='radio'
              name='gender'
              value='male'
              checked={gender === 'male'}
              onChange={this.handleChange}
            />
            Male
          </label>
          <label>
            <input
              type='radio'
              name='gender'
              value='female'
              checked={gender === 'female'}
              onChange={this.handleChange}
            />
            Female
          </label>
        </fieldset>
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
        <label>
          <input
            type='checkbox'
            name='isSubscribed'
            checked={isSubscribed}
            onChange={this.handleChange}
          />
          Subscribe to newsletter
        </label>
        <button style={btnStyles} type='submit'>
          SignUp
        </button>
      </form>
    );
  }
}

export default SignUpForm;
