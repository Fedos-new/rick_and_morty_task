import React, {useEffect, useState} from "react";
import style from './Episode/Episode.module.css'
import Episode from "./Episode/Episode";
import {useDispatch, useSelector} from "react-redux";
import {fetchSeasonTC} from "../../bll/reducer";
import {sortFromBeginning, sortFromEnd} from "../../utils/sortBy";
import {NavLink} from "react-router-dom";

const SelectedEpisodesList = () => {
    const searchEpisode = useSelector(state => state.episodesData.searchEpisode)
    const dispatch = useDispatch()
    const [sortToggle, setSortToggle] = useState(true)

    let copyEpisodes = [...searchEpisode]


    useEffect(() => {
        dispatch(fetchSeasonTC('s1'))
    }, [])


    const sortEpisodes = () => {
        // if(sortToggle) {
      return   sortFromEnd(copyEpisodes,"name")
            // sortFromBeginning(copyEpisodes,"name")
        // } else {
        //     sortFromEnd(copyEpisodes,"name")
        // }
        // setSortToggle(!sortToggle)
    }

    return (
        <div>
            <button className={style.sortBtn} onClick={sortEpisodes}>Sort by Name</button>
            <div className={style.episodesBlock}>
                {
                    copyEpisodes.map(e => <NavLink key={e.id} to={'/episode/' + e.id}>
                        <Episode
                        key={e.id}
                        name={e.name}
                        episode={e.episode}
                        airDate={e.air_date}
                        characters={e.characters}
                    />
                    </NavLink> )}
                <div className={style.child}/>
            </div>
        </div>
    )
}

export default SelectedEpisodesList;
