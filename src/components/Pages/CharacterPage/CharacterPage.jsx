import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCharacterPageTC} from "../../../bll/reducer";
import {NavLink, useParams} from "react-router-dom";
import style from '../../Character/Character.module.css'


const CharacterPage = () => {
    const characterPage = useSelector(state => state.episodesData.characterPage)
    const {  name,status, species, type,gender,location, image,} = characterPage
    const dispatch = useDispatch()
    let {id} = useParams();
    let page = location?.url.match(/\d+/)[0]


    useEffect(() => {
        dispatch(fetchCharacterPageTC(id))
    }, [id])


    return (
        <div>
            <img src={image} alt="ava"/>
            <h2>Character Name: {name}</h2>
            <h3>Status: {status}</h3>
            <h3>Species: {species}</h3>
            <h3>Type: {type}</h3>
            <h3>Gender: {gender}</h3>
            <h3>Status: {status}</h3>
            <div>
                { location && <NavLink to={'/location/'+page} className={style.link}><h3>Location in episode:{location?.name}</h3></NavLink>}

            </div>
        </div>
    )
}
export default CharacterPage


