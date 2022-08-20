import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useDispatch} from "react-redux";
import {getPostAction} from "../redux/reducer/postsReducer";
import {useNavigate} from 'react-router-dom'


export default function BasicCard({props}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getPost =(id)=>{
        dispatch(getPostAction(id));
        navigate('/post')
    }

    return (
        <Card sx={{ minWidth: 275 , width : 570, marginBottom: '20px', textAlign: 'left'}}>
            <CardContent>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    post # {props?.id}
                </Typography>

                <Typography variant="h5" component="div">
                    {props?.title}
                </Typography>

                <Typography variant="body2">
                    {props?.body}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={()=>getPost(props?.id)}>See more</Button>
            </CardActions>
        </Card>
    );
}
