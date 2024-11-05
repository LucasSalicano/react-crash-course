import Post from "./Post"
import classes from './PostsList.module.css';
import {useLoaderData} from "react-router-dom";

function PostsList() {
    const posts = useLoaderData();

    return (
        <>
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post, index) => (
                        <Post key={index} body={post.body} author={post.author}/>
                    ))}
                </ul>
            )}
            {posts.length === 0 && (
                <div style={{textAlign: 'center', color: 'white'}}>
                    <p>No posts found. Start adding some!</p>
                </div>
            )}
        </>
    );
}

export default PostsList;