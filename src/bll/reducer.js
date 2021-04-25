import {appAPI} from "../dal/api";
import {sortFromBeginning, sortFromEnd} from "../utils/sortBy";

const SET_EPISODE = 'episodes/SET_EPISODE';
const SET_LOADING = 'episodes/SET_LOADING';

const SET_SORT_EPISODE_UP = 'selectEpisode/SET_SORT_EPISODE_UP';
const SET_SORT_EPISODE_DOWN = 'selectEpisode/SET_SORT_EPISODE_DOWN';
const SET_SEASON = 'selectEpisode/SET_SEASON';
const SEARCH_EPISODE = 'selectEpisode/SEARCH_EPISODE';

const SET_EPISODE_PAGE = 'page/SET_EPISODE_PAGE';
const SET_CHARACTER_PAGE = 'page/SET_CHARACTER_PAGE';
const SET_LOCATION_PAGE = 'page/SET_LOCATION_PAGE';

const SET_STATUS = 'app/SET_STATUS'
const SET_ERROR = 'app/SET_ERROR';

let initialState = {
    episodes: {},
    season: [],
    searchEpisode: [],
    selectedEpisode: [],
    characters: [],
    episodePage: {},
    characterPage: {},
    locationPage: {},
    status: 'idle',
    loading: false,
    error: null,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EPISODE:
            return {
                ...state,
                episodes: Object.assign({}, state.episodes, action.episodes)
            }
        case SEARCH_EPISODE:
            return {
                ...state,
                searchEpisode: action.episodes,
                selectedEpisode: []
            }
        case SET_SORT_EPISODE_UP:
            return {
                ...state,
                selectedEpisode: sortFromBeginning(action.episodesSort, "name")
            }
        case SET_SORT_EPISODE_DOWN:
            return {
                ...state,
                selectedEpisode: sortFromEnd(action.episodesSort, "name")
            }
        case SET_SEASON:
            return {
                ...state,
                selectedEpisode: [...action.episodes],
                searchEpisode: []
            }
        case SET_EPISODE_PAGE:
            return {
                ...state,
                episodePage: action.payload.episodePageInfo,
                characters: action.payload.charactersArray
            }
        case SET_LOCATION_PAGE:
            return {
                ...state,
                locationPage: action.payload.locationPageInfo,
                characters: action.payload.charactersArray
            }
        case SET_CHARACTER_PAGE:
            return {
                ...state,
                selectedEpisode: action.payload.episodesArray,
                characterPage: action.payload.characterPageInfo
            }
        case SET_LOADING:
            return {
                ...state,
                loading: action.loading,
            }
        case SET_STATUS:
            return {...state, status: action.status}

        case SET_ERROR:
            return {
                ...state,
                error: action.error
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
export const setEpisodePageAC = (payload) => ({type: SET_EPISODE_PAGE, payload})
export const setCharacterPageAC = (payload) => ({type: SET_CHARACTER_PAGE, payload})
export const setLocationPageAC = (payload) => ({type: SET_LOCATION_PAGE, payload})

//Common Action Creates
export const setLoadingAC = (loading) => ({type: SET_LOADING, loading})
export const setAppStatusAC = (status) => ({type: SET_STATUS, status})
export const setErrorApp = (error) => ({type: SET_ERROR, error})


///thunks
//Episodes

export const fetchEpisodeTC = (pages) => {
    return async (dispatch) => {
        try {
            dispatch(setLoadingAC(true))
            const response = await appAPI.getEpisodes(pages)

            const episodes = response.data.results.reduce((acc, ep) => {
                acc[ep.id] = ep
                return acc
            }, {})
            dispatch(setEpisodeAC(episodes))
            dispatch(setLoadingAC(false))
        } catch (e) {
            dispatch(setLoadingAC(false))
        }
    }
}

export const searchEpisodeTC = (name) => {
    return async (dispatch) => {
        dispatch(setAppStatusAC('loading'))
        try {
            const response = await appAPI.searchEpisode(name)
            dispatch(searchEpisodeAC(response.data.results))
            dispatch(setAppStatusAC('succeeded'))
        } catch (e) {
            dispatch(searchEpisodeAC([]))
            dispatch(setAppStatusAC('succeeded'))
        }
    }
}

export const fetchSeasonTC = (season) => {
    return async (dispatch) => {
        try {
            const responseSeason = await appAPI.getSeason(season)
            const seasonData = responseSeason.data
            dispatch(setSeasonAC(seasonData))
        } catch (e) {
            dispatch(setErrorApp(e.message))
            console.log(e.message)
        }
    }
}

//Page Episode
export const fetchEpisodePageTC = (id) => {
    return async (dispatch) => {
        dispatch(setAppStatusAC('loading'))
        try {
            const responseEpisode = await appAPI.getEpisodePage(id)
            const characters = responseEpisode.data.characters

            const responseCharacters = await appAPI.getCharactersOnUrl(characters)
            const charactersArray = responseCharacters.map(res => res.data)
            const episodePageInfo = responseEpisode.data
            dispatch(setEpisodePageAC({
                episodePageInfo, charactersArray
            }))
            dispatch(setAppStatusAC('succeeded'))
        } catch (e) {
            dispatch(setErrorApp(e.message))
            dispatch(setAppStatusAC('succeeded'))
            console.log(e.message)
        }
    }
}

//Page Location
export const fetchLocationPageTC = (id) => {
    return async (dispatch) => {
        dispatch(setAppStatusAC('loading'))
        try {
            const responseLocation = await appAPI.getLocationPage(id)
            const characters = responseLocation.data.residents

            const responseCharacters = await appAPI.getCharactersOnUrl(characters)
            const charactersArray = responseCharacters.map(res => res.data)
            const locationPageInfo = responseLocation.data
            dispatch(setLocationPageAC({
                locationPageInfo, charactersArray
            }))
            dispatch(setAppStatusAC('succeeded'))
        } catch (e) {
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setErrorApp(e.message))
            console.log(e.message)
        }
    }
}

//Page Character
export const fetchCharacterPageTC = (id) => {
    return async (dispatch) => {
        dispatch(setAppStatusAC('loading'))
        try {
            const responseCharacter = await appAPI.getCharacterPage(id)
            const characterPageInfo = responseCharacter.data

            const responseEpisodes = await appAPI.getEpisodesOnUrl(characterPageInfo.episode)
            const episodesArray = responseEpisodes.map(res => res.data)
            dispatch(setCharacterPageAC({
                characterPageInfo, episodesArray
            }))
            dispatch(setAppStatusAC('succeeded'))
        } catch (e) {
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setErrorApp(e.message))
            console.log(e.message)
        }
    }
}

