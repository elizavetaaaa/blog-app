import React from "react";
import {Route, Routes} from 'react-router-dom';
import Posts from "../pages/Posts";
import NewPost from "../pages/NewPost";
import PostInfo from "../pages/PostInfo";


export default function Ways() {
    return (
        <Routes>
            <Route matches path="/" element={<Posts/>}/>
            <Route matches path="/post" element={<PostInfo/>}/>
            <Route matches path="/new-post" element={<NewPost/>}/>
        </Routes>
    )
}
