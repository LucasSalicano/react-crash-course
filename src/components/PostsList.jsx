import Post from "./Post"
import NewPost from './NewPost';
import { useState } from 'react';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList() {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');
    const [modalIsVisible, setModalIsVisible] = useState(true);

    function hideModalHandler() {
        setModalIsVisible(false);
    }

    function changeBodyHandler(event) {
        setEnteredBody(event.target.value);
    }

    function changeAuthorHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    let modalContent;

    if (modalIsVisible) {
        modalContent = (
            <Modal onClose={hideModalHandler}>
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