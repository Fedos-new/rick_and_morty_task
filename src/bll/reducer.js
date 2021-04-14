import {appAPI} from "../dal/api";

const SET_EPISODE = 'SET_EPISODE';
const SET_CHARACTER = 'SET_CHARACTER';
const SET_INIT = 'SET_INIT';

let initialState = {
    episodes: [],
    characters: {},
    initApp: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EPISODE:
            return {
                ...state,
                episodes: [...action.episodes]
            }
        case SET_CHARACTER:
            return {
                ...state,
                characters: action.payload
            }
        case SET_INIT:
            return {
                ...state,
                initApp: action.payload
            }
        default:
            return state;
    }
}

export const setEpisodeAC = (episodes) => ({type: SET_EPISODE, episodes})
export const setCharacterAC = (characters) => ({type: SET_CHARACTER, characters})
export const setInitApp = (init) => ({type: SET_INIT, init})

export const fetchData = (page) => {
    return async (dispatch) => {

        const responseEpisodes = await appAPI.getEpisodes(page)
        debugger
        const episodes = responseEpisodes
        console.log(responseEpisodes)
        // const episodes = responseEpisodes.data.results.reduce((acc, episode) => {
        //     acc[episode.id] = episode
        //     return acc
        // }, {})
        dispatch(setEpisodeAC(episodes))
        dispatch(setInitApp(true))
    }
}

