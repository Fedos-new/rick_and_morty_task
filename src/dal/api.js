import axios from 'axios'

const instance = axios.create({
    baseURL: "https://rickandmortyapi.com/api/",
    headers: {
        accept: "application/json",
    },
});

const seasons = {
    s1: '1,2,3,4,5,6,7,8,9,10,11',
    s2: '12,13,14,15,16,17,18,19,20,21',
    s3: '22,23,24,25,26,27,28,29,30,31',
    s4: '32,33,34,35,36,37,38,39,40,41',
}
const handleSeasonsUrl = (s) => {
    if (s === 's1') return seasons.s1
    if (s === 's2') return seasons.s2
    if (s === 's3') return seasons.s3
    if (s === 's4') return seasons.s4
}

export const appAPI = {
    getEpisodes(page) {
        return instance.get(`episode?page=${page}`)
    },
    getCharactersOnUrl(url) {
        return Promise.all(url.map(url => instance.get(`${url}`)))
    },
    getEpisodesOnUrl(url) {
        return Promise.all(url.map(url => instance.get(`${url}`)))
    },
    getSeason(season) {
        let url = handleSeasonsUrl(season)
        return instance.get(`episode/${url}`)
    },
    searchEpisode(name) {
        return instance.get(`episode/?name=${name}`)
    },
    getEpisodePage(id) {
        return instance.get(`episode/${id}`)
    },
    getCharacterPage(id) {
        return instance.get(`character/${id}`)
    },
    getLocationPage(id) {
        return instance.get(`location/${id}`)
    },
}


