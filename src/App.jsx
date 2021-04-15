import React from "react";
import "./styles.css";
import Header from "./components/Header/Header";
import {Routes} from "./Routes";
import bgJpg from './assets/bg.jpg'


const App = () => {


    const bg = {
        backgroundImage: `url(${bgJpg})`,
        backgroundPosition: 'center',
        backgroundSize: 'auto',
        backgroundRepeat: 'noRepeat',
    }

    return (<div
            // style={bg}
        >
            <div className="appContainer"  >
                <Header/>
                <Routes/>
            </div>
    </div>

    );
};

export default App;
