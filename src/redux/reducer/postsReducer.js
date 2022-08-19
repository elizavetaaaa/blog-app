import axios from "axios";

const GET_POSTS = 'GET_POSTS';
const GET_POST = 'GET_POST';
const SET_MSG = 'SET_MSG';
const CLEAR_MSG = 'CLEAR_MSG';
const SET_EDIT = 'SET_EDIT';

const link = 'https://bloggy-api.herokuapp.com/posts/'
const initialState = {
    posts: [],
    post: [],
    message:'',
    edit: false
};

// reducer
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS: {
            return {
                ...state,
                posts: action.payload,
            }
        }
        case GET_POST: {
            return {
                ...state,
                post: action.payload,
            }
        }
        case SET_MSG: {
            return {
                ...state,
                message: action.payload,
            }
        }
        case CLEAR_MSG: {
            return {
                ...state,
                message: ''
            }
        }
        case SET_EDIT: {
            return {
                ...state,
                edit: action.payload
            }
        }

        default :
            return state
    }
}

 export const getPosts = () => (dispatch) => {
    axios.get(`${link}`)
        .then(({data}) => {
            dispatch({type: GET_POSTS, payload: data})
        })

};

export const getPostAction = (id) => (dispatch) => {
    axios.get(`${link}${id}?_embed=comments`)
        .then(({data}) => {
            dispatch({type: GET_POST, payload: data})
        })

};

export const deletePostAction = (id) => (dispatch) => {
    axios.delete(`${link}${id}`)
        .then(({data}) => {
            console.log(data);
        })

};

export const createPostAction = (payload) => (dispatch) => {
    axios.post(`${link}`, payload)
        .then(({}) => {
            dispatch({type: SET_MSG, payload: 'Yahoo! Your post was successfully created !'})
        })

};

export const createCommentAction = (payload) => (dispatch) => {
    axios.post(`https://bloggy-api.herokuapp.com/comments`, payload)
        .then(({data}) => {
            dispatch(getPostAction(payload.postId));
        })

};

export const editPostAction = (payload, id) => (dispatch) => {
    axios.put(`${link}${id}`, payload)
        .then(({data}) => {
            dispatch(setEdiAction(false));
            dispatch(getPostAction(id));
        })

};

export const clearMsgAction = () => ({
    type: CLEAR_MSG
});

export const setEdiAction = (payload) => ({
    type: SET_EDIT,payload
});