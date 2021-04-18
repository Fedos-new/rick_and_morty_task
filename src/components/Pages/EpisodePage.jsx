import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchEpisodePageTC} from "../../bll/reducer";
import {useParams} from "react-router-dom";
import style from "../Character/Character.module.css"
import CharacterContainer from "../Character/CharacterContainer";


const EpisodePage = () => {
    const episodePage = useSelector(state => state.serialData.episodePage)
    const error = useSelector(state => state.serialData.error)
    const dispatch = useDispatch()
    let {id} = useParams();

    useEffect(() => {
        dispatch(fetchEpisodePageTC(id))
    }, [id])

    if (error) {
        return <div className={style.error}>Error loading data: {error}</div>
    }

    return (
        <div className={style.wrapEpisodePage}>
            <h2>Episode Name: {episodePage.name}</h2>
            <h3>{episodePage.episode}</h3>
            <h3>{episodePage.air_date}</h3>
            <div>
                <h3>Characters in this episode:</h3>
                <CharacterContainer/>
            </div>
        </div>
    )
}
export default EpisodePage
