import React, {useState} from 'react';
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {clearMsgAction, createPostAction} from "../redux/reducer/postsReducer";
import {useDispatch, useSelector} from "react-redux";

const NewPost = () => {
    const dispatch = useDispatch();
    const [post, setPost] = useState({
        title: '',
        body: '',
  });


    const postChangeHandler = (e) => {
        setPost((pref) => {
            return {
                ...pref, [e.target.name]: e.target.value
            }
        })
    };

    const createPost=(e)=>{
        e.preventDefault();
        dispatch(createPostAction(post));
        setPost({title: '', body: ''});
        setTimeout(()=>{
            dispatch(clearMsgAction())
        },2000)
    }
    const message = useSelector(state=>state.postsRec.message)

    return (
        <form className="new-post" onSubmit={(e)=>createPost(e)}>

            <h3>Create new post</h3>

            <TextField  required className="new-post__input" id="standard-basic" label="Title" variant="standard"
                       name="title" value={post.title}
                       onChange={postChangeHandler}/>
            <TextField  required className="new-post__input" id="standard-basic" label="Body" variant="standard"
                        name="body" value={post.body}
                        onChange={postChangeHandler}/>

            <div className="new-post__msg" style={{display: message.length ? 'block': 'none'}}>{message}</div>
            <Button className="new-post__btn" variant="contained" style={{width: '200px'}} type='submit'
            >Create Post</Button>

        </form>
    );
};

export default NewPost;