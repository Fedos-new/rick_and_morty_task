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
    getCharacter (){
        return instance.get(`character`);
    },
    getLocation () {
        return instance.get(`location`);
    },
}


