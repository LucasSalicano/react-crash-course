import Post from "./Post"
import NewPost from './NewPost';
import classes from './PostsList.module.css';

const posts = [
    { author: "Author 1", body: "Post 1 body" },
    { author: "Author 2", body: "Post 2 body" },
    { author: "Author 3", body: "Post 3 body" },
    { author: "Author 4", body: "Post 4 body" },
]

function PostsList() {
    return (
        <>
            <NewPost />
            <ul className={classes.posts}>
                <Post posts={posts} />
            </ul>
        </>
    );
}

export default PostsList;