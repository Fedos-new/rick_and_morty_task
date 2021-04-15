import React from "react";
import style from './Character.module.css'


const Character = (props) => {
    const {ava, name, status, species, type, gender, characters, location} = props

    return (
        <div className={style.character}>
            <img src={ava} alt="character" className={style.ava}/>
            <div className={style.descriptionCharacter}>
                    <div>name:{name}</div>
                    <div>gender:{gender}</div>
                    <div>status:{status}</div>
                    <div>species:{species}</div>
                    <div>{{type}?`type:${type}`:''}</div>
                    <div>characters:{characters}</div>
                    <div>location name:{location.name}</div>
            </div>
        </div>
    );
};

export default Character;
