import React from 'react';
import './App.css';
import Counter from './components/Counter';
import SignUpForm from './components/SignUpForm';
import GreetingDashboard from './components/GreetingDashboard';
import Heading from './components/Heading';
import Greeting from './components/Greeting';
import List from './components/List';
import FlexContainer from './components/FlexContainer';
import ImgWrapper from './components/ImgWrapper';
import UsersLoader from './components/UsersLoader';
import PostsLoader from './components/PostsLoader';
import DataLoader from './components/DataLoader';
import { getPosts } from './api';
import Tree from './components/Tree';
import { UserContext } from './contexts';
import Sidebar from './components/Sidebar';

console.log(UserContext);
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isCounterVisible: true,
      user: {
        id: 1,
        firstName: 'User',
        lastName: 'Userenko',
        email: 'user@mail.com',
      },
    };
  }

  toggleVisibility = () => {
    this.setState({
      isCounterVisible: !this.state.isCounterVisible,
    });
  };

  render() {
    const { isCounterVisible } = this.state;

    const renderPosts = (state) => {
      const { data: posts, isLoading, error } = state;

      const postsCards = posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      ));

      return (
        <div>
          {isLoading && <div>LOADING ... </div>}
          {error && <div>ERROR LOADING POSTS</div>}
          {postsCards}
        </div>
      );
    };

    return (
      <UserContext.Provider value={this.state.user}>
        {/* <Heading headerText={'asdsadsdas'} headerTitle='adsada' />
        <button onClick={this.toggleVisibility}>
          Toggle counter visibility
        </button>
        {isCounterVisible && <Counter />} */}
        <Tree />
        <Sidebar />
        <DataLoader getData={getPosts} render={renderPosts} />
        {/* <PostsLoader />
        <UsersLoader /> */}
        {/* <SignUpForm /> */}
        {/* <GreetingDashboard /> */}
        {/* <List listTitle='Продукты'>
          <li>Хлеб</li>
          <li>Молоко</li>
        </List>
        <List listTitle='задачи'>
          <li>помыть посуду</li>
          <li>выгулять кота</li>
        </List>
        <FlexContainer direction='column' ai='flex-end'>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </FlexContainer>
        <ImgWrapper
          width='500px'
          heigth='500px'
          onClick={() => alert('you clicked')}
          title="some title"
          id="wrapper1"
        >
          <img src='https://apod.nasa.gov/apod/image/2110/LucyLaunchB_Kraus_2048.jpg' />
        </ImgWrapper> */}
      </UserContext.Provider>
    );
  }
}

/*
  Созадть компонент FlexContainer. Его стили можно настроить пропсами
  также ему можно передать детей, которых он будет отображать в качестве
  флекс-детей

*/

export default App;
