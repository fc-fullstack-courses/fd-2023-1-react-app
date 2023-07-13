import { useEffect, useState } from 'react';
import { getPosts } from '../../api';
import { useData } from '../../hooks';

function PostsLoader(props) {
  const { data: posts, isLoading, error } = useData(getPosts);

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
}

export default PostsLoader;
