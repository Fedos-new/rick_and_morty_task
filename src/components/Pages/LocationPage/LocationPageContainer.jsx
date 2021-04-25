import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchLocationPageTC} from "../../../bll/reducer";
import {useParams} from "react-router-dom";
import style from "../../Character/Character.module.css"
import LocationPage from "./LocationPage";


const LocationPageContainer = () => {
    const locationPage = useSelector(state => state.serialData.locationPage)
    const dispatch = useDispatch()
    const error = useSelector(state => state.serialData.error)
    let {id} = useParams();


    useEffect(() => {
        dispatch(fetchLocationPageTC(id))
    }, [id])

    if (error) {
        return <div className={style.error}>Error loading data: {error}</div>
    }

    return (<LocationPage
            locationPage={locationPage}
        />

    )
}
export default LocationPageContainer
