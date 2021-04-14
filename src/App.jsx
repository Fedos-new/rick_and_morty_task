import React from "react";
import "./styles.css";
import Header from "./components/Header";
import {appAPI} from "./dal/api";
import {Routes} from "./Routes";


const App = () => {

    const getS1 = () => {
        appAPI.getSeason('1,2,3,4,5,6,7,8,9,10').then(res => console.log(res))
    }
    const getS2 = () => {
        appAPI.getSeason('11,12,13,14,15,16,17,18,19,20').then(res => console.log(res))
    }
    const getS3 = () => {
        appAPI.getSeason('21,22,23,24,25,26,27,28,29,30').then(res => console.log(res))
    }
    const getS4 = () => {
        appAPI.getSeason('31,32,33,34,35,36,37,38,39,40,41').then(res => console.log(res))
    }

    return (
            <div className="appContainer">
                <Header
                    getS1={getS1}
                    getS2={getS2}
                    getS3={getS3}
                    getS4={getS4}
                />
                <Routes/>
            </div>
    );
};

export default App;
