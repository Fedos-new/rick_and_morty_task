import {appAPI} from "../dal/api";
import {sortFromBeginning, sortFromEnd} from "../utils/sortBy";

const SET_EPISODE = 'SET_EPISODE';
const SET_SORT_EPISODE_UP = 'SET_SORT_EPISODE_UP';
const SET_SORT_EPISODE_DOWN = 'SET_SORT_EPISODE_DOWN';
const SET_SEASON = 'SET_SEASON';
const SEARCH_EPISODE = 'SEARCH_EPISODE';
const SET_EPISODE_PAGE = 'SET_EPISODE_PAGE';

const SET_CHARACTERS = 'SET_CHARACTERS';
const SET_CHARACTER_PAGE = 'SET_CHARACTER_PAGE';

const SET_LOCATION_PAGE = 'SET_LOCATION_PAGE';

const SET_ERROR = 'SET_ERROR';
const SET_INIT = 'SET_INIT';

let initialState = {
    episodes: [],
    season: [],
    searchEpisode: [],
    episodePage: {},
    characterPage: {},
    locationPage: {},
    characters: [],
    error: false,
    initApp: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EPISODE:
            return {
                ...state,
                episodes: [...state.episodes, ...action.episodes]
            }
        case SEARCH_EPISODE:
            return {
                ...state,
                searchEpisode: action.episodes
            }
        case SET_SORT_EPISODE_UP:
            return {
                ...state,
                searchEpisode: sortFromBeginning(action.episodesSort, "name")
            }
        case SET_SORT_EPISODE_DOWN:
            return {
                ...state,
                searchEpisode: sortFromEnd(action.episodesSort, "name")
            }
        case SET_SEASON:
            return {
                ...state,
                searchEpisode: action.episodes
            }
        case SET_EPISODE_PAGE:
            return {
                ...state,
                episodePage: action.episodesPage
            }
        case SET_CHARACTER_PAGE:
            return {
                ...state,
                characterPage: action.characterPage
            }
        case SET_CHARACTERS:
            return {
                ...state,
                characters: [...action.characters]
            }
        case SET_LOCATION_PAGE:
            return {
                ...state,
                locationPage: action.locationPage
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
//Action Creates for Episodes
export const setEpisodeAC = (episodes) => ({type: SET_EPISODE, episodes})
export const setSeasonAC = (episodes) => ({type: SET_SEASON, episodes})
//Action Creates for Sort and search Episodes
export const setSortUpAC = (episodesSort) => ({type: SET_SORT_EPISODE_UP, episodesSort})
export const setSortDownAC = (episodesSort) => ({type: SET_SORT_EPISODE_DOWN, episodesSort})
export const searchEpisodeAC = (episodes) => ({type: SEARCH_EPISODE, episodes})

//Action Creates for Page
export const setEpisodePageAC = (episodesPage) => ({type: SET_EPISODE_PAGE, episodesPage})
export const setCharacterPageAC = (characterPage) => ({type: SET_CHARACTER_PAGE, characterPage})
export const setLocationPageAC = (locationPage) => ({type: SET_LOCATION_PAGE, locationPage})

//Action Create for Characters
export const setCharactersAC = (characters) => ({type: SET_CHARACTERS, characters})

export const setInitApp = (init) => ({type: SET_INIT, init})
export const setErrorApp = (error) => ({type: SET_ERROR, error})


//thunks

//Episodes
export const fetchEpisodeTC = (pages) => (dispatch) => {
    appAPI.getEpisodes(pages)
        .then(res => dispatch(setEpisodeAC(res.data.results)))
        .catch(rej => {
            dispatch(setErrorApp(false))
            console.log(rej)
        })
}

export const searchEpisodeTC = (name) => (dispatch) => {
    appAPI.searchEpisode(name)
        .then(res => dispatch(searchEpisodeAC(res.data.results))
        )
        .catch(rej => {
            dispatch(setErrorApp(false))
            console.log(rej)
        })
}

export const fetchSeasonTC = (season) => (dispatch) => {
    appAPI.getSeason(season)
        .then(res => dispatch(setSeasonAC(res.data)))
        .catch(rej => {
            dispatch(setErrorApp(false))
            console.log(rej)
        })
}

export const fetchEpisodePageTC = (id) => (dispatch) => {
    appAPI.getEpisodePage(id)
        .then(res => dispatch(setEpisodePageAC(res.data)))
        .catch(rej => {
            dispatch(setErrorApp(false))
            console.log(rej)
        })
}


//Characters
export const fetchCharactersTC = (url) => (dispatch) => {

    appAPI.getCharacters(url)
        .then(res => {
            dispatch(setCharactersAC(res.data))
        })
        .catch(rej => {
            dispatch(setErrorApp(false))
            console.log(rej)
        })
}
export const fetchCharacterPageTC = (id) => (dispatch) => {
    appAPI.getCharacterPage(id)
        .then(res => dispatch(setCharacterPageAC(res.data)))
        .catch(rej => {
            dispatch(setErrorApp(false))
            console.log(rej)
        })
}

//Location
export const fetchLocationPageTC = (id) => (dispatch) => {
    appAPI.getLocationPage(id)
        .then(res => {
            dispatch(setLocationPageAC(res.data))
        })
        .catch(rej => {
            dispatch(setErrorApp(false))
            console.log(rej)
        })
}
