import PostList from "../components/PostsList.jsx";
import {Outlet} from "react-router-dom";

function Posts() {
    return (
        <>
            <Outlet/>
            <main>
                <PostList/>
            </main>
        </>
    )
}

export default Posts;

export async function postsLoader() {
    const response = await fetch('http://localhost:8080/posts');
    const data = await response.json();
    return data.posts;
}