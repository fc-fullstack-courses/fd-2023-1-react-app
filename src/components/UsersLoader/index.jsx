import React, { Component } from 'react';

class UsersLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch('https://randomuser.me/api/')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          users: data.results,
        });
      })
      .catch((error) => {
        this.setState({ error });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { users, isLoading, error } = this.state;

    if (isLoading) {
      return <div>LOADING ...</div>;
    }

    if (error) {
      return <div>ERROR HAPPENED</div>;
    }

    const userCards = users.map((user) => (
      <article key={user.login.uuid}>{JSON.stringify(user)}</article>
    ));

    return <div>{userCards}</div>;
  }
}

export default UsersLoader;
