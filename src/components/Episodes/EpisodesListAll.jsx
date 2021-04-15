import React, {useRef, useState} from "react";
import style from './Episode/Episode.module.css'
import Episode from "./Episode/Episode";
import useScroll from "../../hooks/useScroll";
import {useDispatch, useSelector} from "react-redux";
import {fetchEpisodeTC,} from "../../bll/reducer";

const EpisodesListAll = () => {
    const episodes = useSelector(state => state.episodesData.episodes)
    const dispatch = useDispatch()


    const [page, setPage] = useState(1)
    const parentRef = useRef()
    const childRef = useRef()
    const intersected = useScroll(parentRef, childRef, () => fetchEpisodes(page))


    function fetchEpisodes(page) {
        if (page <= 3) setPage(prev => prev + 1)
        dispatch(fetchEpisodeTC(page))
    }


    return (
        <div>
            <button className={style.sortBtn}>Sort by Name</button>
            <div ref={parentRef} className={style.episodesBlockScroll}>
                {
                    episodes.map(e => <Episode
                        key={e.id}
                        name={e.name}
                        episode={e.episode}
                        airDate={e.air_date}
                        characters={e.characters}
                    />)}
                <div ref={childRef} className={style.child}/>
            </div>
        </div>
    );
}


export default EpisodesListAll;
