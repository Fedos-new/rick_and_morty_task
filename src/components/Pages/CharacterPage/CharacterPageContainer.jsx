import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCharacterPageTC} from "../../../bll/reducer";
import {useParams} from "react-router-dom";
import style from '../../Character/Character.module.css'
import CharacterPage from "./CharacterPage";


const CharacterPageContainer = () => {
    const characterPage = useSelector(state => state.serialData.characterPage)
    const episodes = useSelector(state => state.serialData.selectedEpisode)
    const error = useSelector(state => state.serialData.error)

    const {name, status, species, type, gender, location, image,} = characterPage
    const dispatch = useDispatch()
    let {id} = useParams();


    useEffect(() => {
        dispatch(fetchCharacterPageTC(id))
    }, [id])

    if (error) {
        return <div className={style.error}>Error loading data: {error}</div>
    }

    return ( <CharacterPage
            name={name}
            status={status}
            species={species}
            type={type}
            gender={gender}
            location={location}
            image={image}
            episodes={episodes}
    />
    )
}
export default CharacterPageContainer


