import React from 'react';
import Header from '../../components/Header';
import PostsLoader from '../../components/PostsLoader';

const PostsPage = (props) => {
  return (
    <div>
      <Header />
      <h1>Posts</h1>
      <PostsLoader />
    </div>
  );
};

export default PostsPage;
