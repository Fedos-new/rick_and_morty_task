import React from 'react'
import {Redirect, Route, Switch} from "react-router-dom";

export const PATH = {
    ALL_EPISODES: "/episode",
    SEASON_PAGE: "/",
    EPISODE_PAGE: "/",
    CHARACTER_PAGE: "/",
}

export const Routes = () => {

    return (
        <div>
            <Switch>
                <Route path={"/"} exact render={() => <Redirect to={PATH.ALL_EPISODES}/>}/>
                <Route path={PATH.ALL_EPISODES} render={() => {}}/>
                <Route path={PATH.EPISODE_PAGE} render={() => {}}/>
                <Route path={PATH.SEASON_PAGE} render={() => {}}/>
            </Switch>
        </div>
    )
}

