import React, {useEffect} from "react";
import style from './Episode/Episode.module.css'
import Episode from "./Episode/Episode";
import {useDispatch, useSelector} from "react-redux";
import {fetchSeasonTC} from "../../bll/reducer";

const SelectedEpisodesList = () => {
    const searchEpisode = useSelector(state => state.episodesData.searchEpisode)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchSeasonTC('s1'))
    }, [])

    return (
        <div>
            <button className={style.sortBtn}>Sort by Name</button>
            <div className={style.episodesBlock}>
                {
                    searchEpisode.map(e => <Episode
                        key={e.id}
                        name={e.name}
                        episode={e.episode}
                        airDate={e.air_date}
                        characters={e.characters}
                    />)}
                <div className={style.child}/>
            </div>
        </div>
    )
}

export default SelectedEpisodesList;
