import React from "react";
import "./styles.css";
import Header from "./components/Header/Header";
import {Routes} from "./Routes";


const App = () => {

    return (<div>
            <div className="appContainer">
                <Header/>
                <Routes/>
            </div>
        </div>

    );
};

export default App;
