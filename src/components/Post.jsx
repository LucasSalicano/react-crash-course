import classes from './Post.module.css';

function Post(props) {
  return (
    props.posts.map((post) => (
      <li className={classes.post}>
          <p className={classes.author}>{post.author}</p>
          <p className={classes.text}>{post.body}</p>
      </li>
    ))
  );
}

export default Post;