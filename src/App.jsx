import React from "react";
import "./styles.css";
import Header from "./components/Header";
import EpisodesList from "./components/EpisodesList";

const App = () => {

    return (
        <div className="appContainer">

            <Header/>
            <EpisodesList/>
        </div>
    );
};

export default App;
