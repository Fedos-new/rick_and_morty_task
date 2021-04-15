import React, {useRef, useState} from "react";
import style from './Episode/Episode.module.css'
import Episode from "./Episode/Episode";
import useScroll from "../../hooks/useScroll";
import {useDispatch, useSelector} from "react-redux";
import {fetchEpisodeTC,} from "../../bll/reducer";
import {sortFromBeginning, sortFromEnd} from "../../utils/sortBy";
import {NavLink} from "react-router-dom";

const EpisodesListAll = () => {
    const episodes = useSelector(state => state.episodesData.episodes)
    const dispatch = useDispatch()
    const [sortToggle, setSortToggle] = useState(true)


    const [page, setPage] = useState(1)
    const parentRef = useRef()
    const childRef = useRef()
    const intersected = useScroll(parentRef, childRef, () => fetchEpisodes(page))


    function fetchEpisodes(page) {
        if (page <= 3) setPage(prev => prev + 1)
        dispatch(fetchEpisodeTC(page))
    }

    const sortEpisodes = () => {
        if(sortToggle) {
            sortFromBeginning(episodes,"name")
        } else {
            sortFromEnd(episodes,"name")
        }
        // setSortToggle(!sortToggle)
    }

    return (
        <div>
            <button className={style.sortBtn} onClick={sortEpisodes}>Sort by Name</button>
            <div ref={parentRef} className={style.episodesBlockScroll}>
                {
                    episodes.map(e =>  <NavLink key={e.id} to={'/episode/' + e.id}>
                    <Episode
                        name={e.name}
                        episode={e.episode}
                        airDate={e.air_date}
                        characters={e.characters}
                    />
                        </NavLink>
                    )}
                <div ref={childRef} className={style.child}/>
            </div>
        </div>
    );
}


export default EpisodesListAll;
