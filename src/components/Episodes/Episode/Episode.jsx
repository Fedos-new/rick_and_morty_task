import React from "react";
import style from './Episode.module.css'
import img from '../../../assets/episode.png'


const Episode = (props) => {

    const cards = {backgroundImage: `url(${img})`}

    return (
        <div className={style.episode}>
            {/*<img src={img} alt="Episode" className={`${style.img} ${cards}`} />*/}
            <div className={style.img} style={cards}>
                <div className={style.descriptionBlock}>
                    <div className={style.descriptionText}>
                        <div className={style.titleEpisode}>{props.name}</div>
                        <div className={style.infoText}>
                            <div>{props.episode}</div>
                            <div>{props.airDate}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Episode;
