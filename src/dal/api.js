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

export const appAPI = {
    getEpisodes (page) {
        return instance.get(`episode?page=${page}`);
    },
    getSeason (season) {
                if(season === 's1')  return instance.get(`episode/${seasons.s1}`);
                if(season === 's2')  return instance.get(`episode/${seasons.s2}`);
                if(season === 's3')  return instance.get(`episode/${seasons.s3}`);
                if(season === 's4')  return instance.get(`episode/${seasons.s4}`);
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


