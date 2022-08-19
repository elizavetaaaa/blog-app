import './App.scss';
import React, {useEffect} from "react";
import Header, {MyTabs} from "./components/Header";
import {Container} from "@mui/material";
import {useDispatch} from "react-redux";
import {getPosts} from "./redux/reducer/postsReducer";
import Ways from "./router/Routes";

function TabPanel(props) {
    return null;
}


function App() {


    return (
        <div className="App">
                <Header/>
                <Ways/>
        </div>
    );
}

export default App;
