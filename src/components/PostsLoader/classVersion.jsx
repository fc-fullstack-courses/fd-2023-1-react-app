import { Component } from 'react';
import { getPosts } from '../../api';

class PostsLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    getPosts()
      .then((posts) => {
        // console.log(posts);
        this.setState({ posts });
      })
      .catch((error) => {
        this.setState({ error });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { posts, isLoading, error } = this.state;

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
}

export default PostsLoader;
