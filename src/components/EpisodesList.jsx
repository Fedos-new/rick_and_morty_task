import React, {useRef, useState} from "react";
import style from './Episode/Episode.module.css'
import {appAPI} from "../dal/api";
import Episode from "./Episode/Episode";
import useScroll from "../hooks/useScroll";

const EpisodesList = () => {

    const [episode, setEpisode] = useState([])

    const [page, setPage] = useState(1)
    const parentRef = useRef()
    const childRef = useRef()
    const intersected = useScroll(parentRef, childRef, () => fetchEpisodes(page))

    function fetchEpisodes(page) {
        appAPI.getEpisodes(page)
            .then(res => {
                // if(res.data.info.pages >= page)
                    setEpisode(prev => [...prev, ...res.data.results]);
                setPage(prev =>  prev + 1)
                console.log('scroll!!!')
            })
            // .catch((e)=> console.log(e))
    }

    console.log(episode)
    return (
        <div ref={parentRef}
             // style={{height: '80vh', overflow: 'auto'}}
             className={style.episodesBlock}
        >
            {episode.map(e => <Episode
                key={e.id}
                name={e.name}
                episode={e.episode}
                airDate={e.air_date}
                characters={e.characters}
            />)}
            <div ref={childRef}
                 // style={{height: 20, background: 'green'}}
                 className={style.child}
            />
        </div>
    );
};


export default EpisodesList;
