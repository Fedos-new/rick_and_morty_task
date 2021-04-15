import React, {useEffect, useState} from "react";
import style from './Episode/Episode.module.css'
import Episode from "./Episode/Episode";
import {useDispatch, useSelector} from "react-redux";
import {fetchSeasonTC, setSortDownAC, setSortUpAC} from "../../bll/reducer";
import {NavLink} from "react-router-dom";
import SuperButton from "../common/Button/SuperButton";

const SelectedEpisodesList = () => {
    const searchEpisode = useSelector(state => state.episodesData.searchEpisode)
    const error = useSelector(state => state.episodesData.error)
    const dispatch = useDispatch()
    const [sortToggle, setSortToggle] = useState(false)

    let copyEpisodes = [...searchEpisode]

    useEffect(() => {
        dispatch(fetchSeasonTC('s1'))
    }, [])


    const sortEpisodes = () => {
        if (sortToggle) {
            dispatch(setSortUpAC(copyEpisodes))
            setSortToggle(!sortToggle)
        } else {
            dispatch(setSortDownAC(copyEpisodes))
            setSortToggle(!sortToggle)
        }
    }

    return (
        <div>
            <div className={style.sortBtn} >
            <SuperButton onClick={sortEpisodes}>Sort by Name</SuperButton>
            </div>
            <div className={style.episodesBlock}>
                {
                    copyEpisodes && copyEpisodes.map(e => <NavLink key={e.id} to={'/episode/' + e.id}>
                        <Episode
                            key={e.id}
                            name={e.name}
                            episode={e.episode}
                            airDate={e.air_date}
                            characters={e.characters}
                        />
                    </NavLink>)}
                <div className={style.child}/>

            </div>
            {error && <div>Ups...Error loading data.Sorry</div>}
        </div>
    )
}

export default SelectedEpisodesList;
