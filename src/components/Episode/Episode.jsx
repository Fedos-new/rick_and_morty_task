import React from "react";
import style from './Episode.module.css'


const Episode = (props) => {
    // console.log(props.characters)


    return (
        <div className={style.episode}>
            <div className={style.img}> </div>
            <h4>{props.name}</h4>
            <h5>{props.episode}</h5>
            <h5>{props.airDate}</h5>
        </div>
    );
};

export default Episode;
