import Post from "./Post"
import NewPost from './NewPost';
import classes from './PostsList.module.css';
import { useState } from 'react';

function PostsList() {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function changeBodyHandler(event) {
      setEnteredBody(event.target.value);
    }

    function changeAuthorHandler(event) {
      setEnteredAuthor(event.target.value);
    }
  
    return (
        <>
            <NewPost onBodyChange={changeBodyHandler} onAuthorChange={changeAuthorHandler} />
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody} />
                <Post author="Lucas Salicano" body="body text two" />
            </ul>
        </>
    );
}

export default PostsList;