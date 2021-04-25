import React from 'react'
import {Redirect, Route, Switch} from "react-router-dom";
import EpisodesListAll from "./components/Episodes/EpisodesListAll";
import SelectedEpisodesList from './components/Episodes/SelectedEpisodesList'
import CharacterPageContainer from "./components/Pages/CharacterPage/CharacterPageContainer";
import EpisodePageContainer from "./components/Pages/EpisodePage/EpisodePageContainer";
import LocationPageContainer from "./components/Pages/LocationPage/LocationPageContainer";

export const PATH = {
    ALL_EPISODES: "/all_episodes",
    SEASON_PAGE: "/episodes/",
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
                <Route path={PATH.SEASON_PAGE} render={() => <SelectedEpisodesList />}/>
                <Route path={PATH.EPISODE_PAGE} render={() => <EpisodePageContainer/>}/>
                <Route path={PATH.CHARACTER_PAGE} render={() => <CharacterPageContainer/>}/>
                <Route path={PATH.LOCATION_PAGE} render={() => <LocationPageContainer />}/>
            </Switch>
        </div>
    )
}

