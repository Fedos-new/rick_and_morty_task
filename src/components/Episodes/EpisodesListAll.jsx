import React, {useCallback, useEffect, useRef, useState} from "react";
import style from './Episode/Episode.module.css'
import Episode from "./Episode/Episode";
import useScroll from "../../hooks/useScroll";
import {useDispatch, useSelector} from "react-redux";
import {fetchEpisodeTC,} from "../../bll/reducer";
import {NavLink} from "react-router-dom";

const EpisodesListAll = React.memo(() => {
    const episodes = useSelector(state => state.serialData.episodes)
    const dispatch = useDispatch()

    const page = useRef(1)
    const [element, setElement] = useState(null)
    const intersected = useScroll( element, () => loadMore())

    const loadMore = () => {
        page.current++
        handleInitial(page.current)
    }

    const handleInitial = useCallback((page) => dispatch(fetchEpisodeTC(page)), [fetchEpisodeTC])

    useEffect(() => {
      if(JSON.stringify(episodes) === '{}') handleInitial(page.current)
    }, [handleInitial]);

    return (
        <div>
            <div  className={style.episodesBlockScroll}>
                {
                   Object.values(episodes).map(e => <NavLink key={e.id} to={'/episode/' + e.id}>
                            <Episode
                                name={e.name}
                                episode={e.episode}
                                airDate={e.air_date}
                                characters={e.characters}
                            />
                        </NavLink>
                    )
                }
                <div ref={setElement} className={style.child}/>
            </div>
        </div>
    );
})

export default EpisodesListAll;
