import React from "react";
import style from './Character.module.css'


const Character = (props) => {
    const {ava, name, status, species, type, gender, characters, location} = props

    return (
        <div className={style.character}>
            <img src={ava} alt="character" />
            <ul className={style.descriptionCharacter}>
                    <li>name: {name}</li>
                    <li>gender: {gender}</li>
                    <li>status: {status}</li>
                    <li>species: {species}</li>
                    <li>{{type}?`type:${type}`:''}</li>
                    <li>characters: {characters}</li>
                    <li>location name: {location.name ? location.name : ''}</li>
            </ul>
        </div>
    );
};

export default Character;
