import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Posts, {postsLoader} from './routes/Posts.jsx'
import './index.css'
import NewPost, {action as newPostAction} from "./routes/NewPost.jsx";
import RootLayout from "./routes/RootLayout.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                path: '/',
                element: <Posts/>,
                loader: postsLoader,
                children: [{path: '/post/new', element: <NewPost/>, action: newPostAction}]
            },
        ]
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
)
