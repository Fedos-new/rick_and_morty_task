import React from "react";
import "./styles.css";
import Header from "./components/Header/Header";
import {Routes} from "./Routes";
import {useSelector} from "react-redux";
import {Loader} from "./components/common/Loader/Loader";


const App = () => {
    const status = useSelector(state => state.serialData.status)

    return (<div>
            <div className="appContainer">
                <Header/>
                { status === 'loading' &&  <Loader/>}
                <Routes/>
            </div>
        </div>
    );
};

export default App;
