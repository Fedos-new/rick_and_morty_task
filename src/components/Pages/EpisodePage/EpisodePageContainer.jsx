import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchEpisodePageTC} from "../../../bll/reducer";
import {useParams} from "react-router-dom";
import style from "../../Character/Character.module.css"
import EpisodePage from "./EpisodePage";


const  EpisodePageContainer =  () => {
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

    return (<EpisodePage
         name={episodePage.name}
         episode={episodePage.episode}
         air_date={episodePage.air_date}
    />

    )
}
export default EpisodePageContainer
