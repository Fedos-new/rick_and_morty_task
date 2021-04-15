import {appAPI} from "../dal/api";

const SET_EPISODE = 'SET_EPISODE';
const SET_SEASON = 'SET_SEASON';
const SEARCH_EPISODE = 'SEARCH_EPISODE';
const SET_CHARACTER = 'SET_CHARACTER';
const SET_ERROR = 'SET_ERROR';
const SET_INIT = 'SET_INIT';

let initialState = {
    episodes: [],
    season:[],
    searchEpisode: [],
    characters: [],
    error: false,
    initApp: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EPISODE:
            return {
                ...state,
                episodes: [...state.episodes,...action.episodes]
            }
        case SEARCH_EPISODE:
            return {
                ...state,
                searchEpisode: action.episodes
            }
        case SET_SEASON:
            return {
                ...state,
                searchEpisode: action.episodes
            }
        case SET_CHARACTER:
            return {
                ...state,
                characters: action.payload
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
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
export const setSeasonAC = (episodes) => ({type: SET_SEASON, episodes})

export const searchEpisodeAC = (episodes) => ({type: SEARCH_EPISODE, episodes})

export const setCharacterAC = (characters) => ({type: SET_CHARACTER, characters})
export const setInitApp = (init) => ({type: SET_INIT, init})


//thunks
export const fetchEpisodeTC = (page) => (dispatch) => {
     appAPI.getEpisodes(page)
        .then(res =>  dispatch(setEpisodeAC(res.data.results)))
        .catch(rej => {
            console.log(rej.messages)
        })
}

//thunks
export const searchEpisodeTC = (name) => (dispatch) => {
    appAPI.searchEpisode(name)
        .then(res => {
            console.log(res)
            dispatch(searchEpisodeAC(res.data.results))
        } )
        .catch(rej => {
            console.log(rej.messages)
        })
}

//thunks
export const fetchSeasonTC = (season) => (dispatch) => {
    appAPI.getSeason(season)
        .then(res => {
            console.log(res)
            dispatch(setSeasonAC(res.data))})
        .catch(rej => {
            console.log(rej.messages)
        })
}
