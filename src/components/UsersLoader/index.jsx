import React, { Component } from 'react';
import { getUsers } from '../../api';
import UserCard from '../UserCard';

class UsersLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isLoading: false,
      error: null,
      currentPage: 1,
    };
  }

  nextPage = () => {
    const { currentPage } = this.state;
    this.setState({ currentPage: currentPage + 1 });
  };

  prevPage = () => {
    const { currentPage } = this.state;
    this.setState({
      currentPage: currentPage > 1 ? currentPage - 1 : currentPage,
    });
  };

  load = () => {
    const { currentPage } = this.state;

    this.setState({ isLoading: true });

    getUsers({
      page: currentPage,
    })
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
  };

  componentDidMount() {
    this.load();
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentPage } = this.state;

    if (prevState.currentPage !== currentPage) {
      this.load();
    }
  }

  render() {
    const { users, isLoading, error } = this.state;

    const userCards = users.map((user) => (
      <UserCard key={user.login.uuid} user={user}/>
    ));

    return (
      <div>
        <div>
          <button onClick={this.prevPage}>Previous page</button>
          <button onClick={this.nextPage}>Next page</button>
        </div>
        {isLoading && <div>LOADING ... </div>}
        {error && <div>ERROR HAPPENED</div>}
        {userCards}
      </div>
    );
  }
}

export default UsersLoader;
