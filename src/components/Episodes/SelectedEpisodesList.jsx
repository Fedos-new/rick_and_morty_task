import React, {useState} from "react";
import style from './Episode/Episode.module.css'
import Episode from "./Episode/Episode";
import {useDispatch, useSelector} from "react-redux";
import {setSortDownAC, setSortUpAC} from "../../bll/reducer";
import {NavLink} from "react-router-dom";
import SuperButton from "../common/Button/SuperButton";
import rick from "../../assets/logo.png";

const SelectedEpisodesList = React.memo(() => {
    const selectedEpisode = useSelector(state => state.serialData.selectedEpisode)
    const searchEpisode = useSelector(state => state.serialData.searchEpisode)
    const dispatch = useDispatch()
    const [sortToggle, setSortToggle] = useState(false)

    let copyEpisodes = [...selectedEpisode]
    let renderEpisodesResult

    if (selectedEpisode.length === 0) {
        renderEpisodesResult = [...searchEpisode]
    } else {
        renderEpisodesResult = [...copyEpisodes]
    }

    const sortEpisodes = () => {
        if (sortToggle) {
            dispatch(setSortUpAC(copyEpisodes))
            setSortToggle(!sortToggle)
        } else {
            dispatch(setSortDownAC(copyEpisodes))
            setSortToggle(!sortToggle)
        }
    }

    if (copyEpisodes.length === 0 && searchEpisode.length === 0) {
        return <div className={style.nothingSearch}>Nothing was found. Please change your request
            <img src={rick} alt="Nothing..." className={style.rick}/>
        </div>
    }

    return (
        <div>
            <div className={style.sortBtn}>
                <SuperButton onClick={sortEpisodes}>Sort by Name</SuperButton>
            </div>
            <div className={style.episodesBlock}>
                {
                    renderEpisodesResult.map(e => <NavLink key={e.id} to={'/episode/' + e.id}>
                        <Episode
                            name={e.name}
                            episode={e.episode}
                            airDate={e.air_date}
                            characters={e.characters}
                        />
                    </NavLink>)}
                <div className={style.child}/>

            </div>

        </div>
    )
})

export default SelectedEpisodesList;
