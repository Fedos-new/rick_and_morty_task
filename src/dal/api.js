import axios from 'axios'

const instance = axios.create({
    baseURL: "https://rickandmortyapi.com/api/",
    headers: {
        accept: "application/json",
    },
});

export const appAPI = {
    getEpisodes (page) {
        return instance.get(`episode?page=${page}`);
    },
    getSeason (episodes) {
        return instance.get(`episode/${episodes}`);
    },
    searchEpisode (name) {
        return instance.get(`episode/?name=${name}`)
    },
    getCharacter (){
        return instance.get(`character`);
    },
    getLocation () {
        return instance.get(`location`);
    },
}


