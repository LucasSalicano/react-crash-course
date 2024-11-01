import Post from "./Post"
import classes from './PostsList.module.css';
import {useLoaderData} from "react-router-dom";

function PostsList() {
    const posts = useLoaderData();

    // function addPostHandler(postData) {
    //     fetch('http://localhost:8080/posts', {
    //         method: 'POST',
    //         body: JSON.stringify(postData),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     });
    //     setPosts((existingPosts) => [postData, ...existingPosts]);
    // }

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