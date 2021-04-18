import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchLocationPageTC} from "../../bll/reducer";
import {useParams} from "react-router-dom";
import style from "../Character/Character.module.css"
import CharacterContainer from "../Character/CharacterContainer";


const LocationPage = () => {
    const locationPage = useSelector(state => state.serialData.locationPage)
    const dispatch = useDispatch()
    const error = useSelector(state => state.serialData.error)

    let {id} = useParams();

    useEffect(() => {
        dispatch(fetchLocationPageTC(id))
    }, [id])

    if(error) {
        return  <div className={style.error}>Error loading data: {error}</div>
    }

        return (
        <div className={style.wrapEpisodePage}>
            <h2>Location Name: {locationPage.name}</h2>
            <h3>Type: {locationPage.type}</h3>
            <h3>Dimension: {locationPage.dimension}</h3>
            <div>
                <h3>Residents in this location:</h3>
                <CharacterContainer/>
            </div>
        </div>
    )
}
export default LocationPage
