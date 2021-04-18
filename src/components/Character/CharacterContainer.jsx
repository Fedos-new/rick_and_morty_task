import React from "react";
import style from "./Character.module.css";
import {NavLink} from "react-router-dom";
import Character from "./Character";
import {useSelector} from "react-redux";


const CharacterContainer = () => {
    const characters = useSelector(state => state.serialData.characters)

    return (
        <div className={style.wrapCharacter}>
            {
                characters && characters.map(ch => <NavLink key={ch.id} to={'/character/' + ch.id}>
                        <Character
                            ava={ch.image}
                            name={ch.name}
                            episode={ch.episode}
                            status={ch.status}
                            species={ch.species}
                            type={ch.type}
                            gender={ch.gender}
                            characters={ch.characters}
                            location={ch.location }
                        />
                    </NavLink>
                    )
            }
        </div>
    );
};

export default CharacterContainer;
