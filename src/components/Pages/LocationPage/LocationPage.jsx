import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCharactersTC, fetchLocationPageTC} from "../../../bll/reducer";
import {NavLink, useParams} from "react-router-dom";
import Character from "../../Character/Character";
import style from "../../Character/Character.module.css"


const LocationPage = () => {
    const locationPage = useSelector(state => state.episodesData.locationPage)
    const characters = useSelector(state => state.episodesData.characters)
    const dispatch = useDispatch()
    let {id} = useParams();
    let pages = []

    if (locationPage.residents) locationPage.residents.map(ch => {
        let arrId = ch.match(/\d+/)
        pages.push(arrId[0])
    })

    useEffect(() => {
        dispatch(fetchLocationPageTC(id))
    }, [id])

    useEffect(() => {
        dispatch(fetchCharactersTC(pages))
    }, [])


    return (
        <div className={style.wrapEpisodePage}>
            <h2>Location Name: {locationPage.name}</h2>
            <h3>Type:{locationPage.type}</h3>
            <h3>Dimension:{locationPage.dimension}</h3>
            <div>
                <h3>Residents in this location:</h3>
                <div className={style.wrapCharacter}>
                    {
                        characters
                            ? characters.map(ch => <NavLink key={ch.id} to={'/character/' + ch.id}>
                                <Character
                                    ava={ch.image}
                                    name={ch.name}
                                    episode={ch.episode}
                                    status={ch.status}
                                    species={ch.species}
                                    type={ch.type}
                                    gender={ch.gender}
                                    characters={ch.characters}
                                    location={ch.location}
                                />
                            </NavLink>
                            )
                            : '...loading'
                    }
                </div>
            </div>
        </div>
    )
}
export default LocationPage
