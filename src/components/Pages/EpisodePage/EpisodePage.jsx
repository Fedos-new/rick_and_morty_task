import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCharactersTC, fetchEpisodePageTC} from "../../../bll/reducer";
import {NavLink, useParams} from "react-router-dom";
import Character from "../../Character/Character";
import style from "../../Character/Character.module.css"


const EpisodePage = () => {
    const episodePage = useSelector(state => state.episodesData.episodePage)
    const characters = useSelector(state => state.episodesData.characters)
    const dispatch = useDispatch()
    let {id} = useParams();


    useEffect(() => {
        dispatch(fetchEpisodePageTC(id))
    }, [id])


    useEffect(() => {
        let pages = []

        if (episodePage.characters) episodePage.characters.map(ch => {
            let arrId = ch.match(/\d+/)
            pages.push(arrId[0])
        })
        dispatch(fetchCharactersTC(pages))
    }, [id])


    return (
        <div className={style.wrapEpisodePage}>
            <h2>Episode Name: {episodePage.name}</h2>
            <h3>{episodePage.episode}</h3>
            <h3>{episodePage.air_date}</h3>
            <div>
                <h3>Characters in this episode:</h3>
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
export default EpisodePage
