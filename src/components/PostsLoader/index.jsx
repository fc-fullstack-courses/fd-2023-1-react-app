import { useEffect, useState } from 'react';
import { getPosts } from '../../api';

function PostsLoader(props) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    getPosts()
      .then((posts) => {
        // console.log(posts);
        setPosts(posts);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

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
