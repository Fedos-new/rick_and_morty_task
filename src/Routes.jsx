import React from 'react'
import {Redirect, Route, Switch} from "react-router-dom";
import EpisodesListAll from "./components/Episodes/EpisodesListAll";
import SelectedEpisodesList from './components/Episodes/SelectedEpisodesList'
import EpisodePage from "./components/Pages/EpisodePage/EpisodePage";
import CharacterPage from "./components/Pages/CharacterPage/CharacterPage";
import LocationPage from "./components/Pages/LocationPage/LocationPage";
import {useSelector} from "react-redux";

export const PATH = {
    ALL_EPISODES: "/all_episodes",
    SEASON_PAGE: "/episodes",
    EPISODE_PAGE: "/episode/:id?",
    CHARACTER_PAGE: "/character/:id?",
    LOCATION_PAGE: "/location/:id?",
}

export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path={"/"} exact render={() => <Redirect to={PATH.ALL_EPISODES}/>}/>
                <Route path={PATH.ALL_EPISODES} render={() => <EpisodesListAll/> }/>
                <Route path={PATH.SEASON_PAGE} render={() => <SelectedEpisodesList/>}/>
                <Route path={PATH.EPISODE_PAGE} render={() => <EpisodePage/>}/>
                <Route path={PATH.CHARACTER_PAGE} render={() => <CharacterPage/>}/>
                <Route path={PATH.LOCATION_PAGE} render={() => <LocationPage/>}/>
            </Switch>
        </div>
    )
}

