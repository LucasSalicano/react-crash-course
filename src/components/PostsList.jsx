import Post from "./Post"
import NewPost from './NewPost';
import { useState } from 'react';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList({isPosting, onStopPosting}) {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function changeBodyHandler(event) {
        setEnteredBody(event.target.value);
    }

    function changeAuthorHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    let modalContent;

    if (isPosting) {
        modalContent = (
            <Modal onClose={onStopPosting}>
                <NewPost
                    onBodyChange={changeBodyHandler}
                    onAuthorChange={changeAuthorHandler}
                />
            </Modal>
        );
    }

    return (
        <>
            {modalContent}
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody} />
                <Post author="Lucas Salicano" body="body text two" />
            </ul>
        </>
    );
}

export default PostsList;