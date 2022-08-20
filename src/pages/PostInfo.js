import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useDispatch, useSelector} from "react-redux";
import {createCommentAction, deletePostAction, editPostAction, setEdiAction} from "../redux/reducer/postsReducer";
import {useNavigate} from "react-router-dom";
import {TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {FaComment} from "react-icons/fa";


export default function PostInfo() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const edit = useSelector(state => state.postsRec.edit)

    const post = useSelector(state => state.postsRec.post);
    const deletePost = (id) => {
        dispatch(deletePostAction(id));
        navigate('/')
    }
    const [comment, setComment] = useState('');
    const addComment = () => {
        let payload = {
            postId: post.id,
            body: comment
        }
        dispatch(createCommentAction(payload));
        setComment('')
    }
    const openEditPost = () => {
        setEditPost({
            title: post.title,
            body: post.body
        })
        dispatch(setEdiAction(true))
    }
    const savePost = () => {
        dispatch(editPostAction(editPost, post.id));
    }
    const [editPost, setEditPost] = useState({
        title: post.title,
        body: post.body,
    });

    const postChangeHandler = (e) => {
        setEditPost((pref) => {
            return {
                ...pref, [e.target.name]: e.target.value
            }
        })
    };
    useEffect(() => {
        dispatch(setEdiAction(false));
    }, [])


    return (
        <Card sx={{minWidth: 275, textAlign: 'left'}}>
            <CardContent>
                <Typography sx={{mb: 1.5}} color="text.secondary">
                    post # {post?.id}
                </Typography>
                <div>
                    {edit ?
                        <input className='posts__input'
                               name="title"
                               value={editPost.title}
                               onChange={postChangeHandler}/>
                        :
                        <Typography sx={{fontSize: 32}} color="text.secondary" gutterBottom>
                            {post.title}
                        </Typography>}
                </div>

                <div>
                    {edit ?
                        <input className='posts__input'
                               name="body"
                               value={editPost.body}
                               onChange={postChangeHandler}/>
                        :
                        <p color="text.secondary">
                            {post.body}
                        </p>}
                </div>

                <h3 style={{marginTop: '60px'}}>Comments:</h3>
                {post?.comments?.length ?
                    post?.comments?.map((comment) => {
                        return <p key={Math.random()}><FaComment style={{marginRight: '10px'}}/>{comment.body}</p>
                    }) :
                    <p>Be the first one who comment this post :)</p>}


                <div style={{display: 'flex', marginTop: '50px'}}>
                    <TextField id="standard-basic" label="Add a comment" variant="outlined"
                               style={{width: '500px', marginRight: '5px'}}
                               value={comment} onChange={(e) => setComment(e.target.value)}/>
                    <Button variant="contained" onClick={() => addComment()}>+</Button>


                </div>

            </CardContent>
            <CardActions style={{display: 'flex', justifyContent: 'right'}}>
                <Button type='button' size="small"
                        onClick={() => edit ? savePost() : openEditPost()}>{edit ? 'Save' : 'Edit'}</Button>
                <Button size="small" onClick={() => deletePost(post.id)}>Delete</Button>
            </CardActions>
        </Card>
    );
}
