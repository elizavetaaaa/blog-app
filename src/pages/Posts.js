import React, {useEffect} from 'react';
import {getPosts} from "../redux/reducer/postsReducer";
import {useDispatch, useSelector} from "react-redux";
import BasicCard from "../components/Post";

const Posts = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPosts());
    },[]);

    const posts = useSelector(state=>state.postsRec.posts)

    return (
        <div className="posts">
            {posts?.map((post)=>{return <BasicCard key={post.id} props={post}/>})}
        </div>
    );
};

export default Posts;