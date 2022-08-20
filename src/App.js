import './App.scss';
import React from "react";
import Header from "./components/Header";
import Ways from "./router/Routes";

function App() {
    return (
        <div className="App">
            <Header/>
            <Ways/>
        </div>
    );
}

export default App;
