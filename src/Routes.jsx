import React from 'react'
import {Redirect, Route, Switch} from "react-router-dom";
import EpisodesListAll from "./components/Episodes/EpisodesListAll";
import SelectedEpisodesList from './components/Episodes/SelectedEpisodesList'

export const PATH = {
    ALL_EPISODES: "/all_episodes",
    SEASON_PAGE: "/episodes",
    EPISODE_PAGE: "/",
    CHARACTER_PAGE: "/",
}

export const Routes = () => {

    return (
        <div>
            <Switch>
                <Route path={"/"} exact render={() => <Redirect to={PATH.ALL_EPISODES}/>}/>
                <Route path={PATH.ALL_EPISODES} render={() => <EpisodesListAll/> }/>
                <Route path={PATH.SEASON_PAGE} render={() => <SelectedEpisodesList/>}/>
                <Route path={PATH.EPISODE_PAGE} render={() => {}}/>
            </Switch>
        </div>
    )
}

