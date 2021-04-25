import React from "react";
import {NavLink} from "react-router-dom";
import style from '../../Character/Character.module.css'
import style2 from '../../Episodes/Episode/Episode.module.css'
import Episode from "../../Episodes/Episode/Episode";


const CharacterPage = React.memo((props) => {

    const {name, status, species, type, gender, location, image,episodes} = props

    return (
        <div className={style.wrapEpisodePage}>
            <img src={image} alt="ava"/>
            <div className={style.CharacterInfo}>
                <h2>Character Name: {name}</h2>
                <h3>Status: {status}</h3>
                <h3>Species: {species}</h3>
                <h3>Type: {type}</h3>
                <h3>Gender: {gender}</h3>
                <div>
                    {location?.url ?
                        <NavLink to={'/location/' + location?.url.match(/\d+/)[0]} className={style.link}>
                            <h3>Location: {location?.name}</h3>
                        </NavLink>
                        : <h3>Location: {location?.name}</h3>}
                </div>
            </div>
            <div>
                <h3>Episodes:</h3>
                <div className={style2.episodesBlock}>
                    {
                        episodes &&
                        Object.values(episodes).map(e => <NavLink key={e.id} to={'/episode/' + e.id}>
                                <Episode
                                    key={e.id}
                                    name={e.name}
                                    episode={e.episode}
                                    airDate={e.air_date}
                                    characters={e.characters}
                                />
                            </NavLink>
                        )}
                </div>
            </div>
        </div>
    )
})
export default CharacterPage


