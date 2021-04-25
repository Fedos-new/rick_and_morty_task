import React from "react";
import style from "../../Character/Character.module.css"
import CharacterContainer from "../../Character/CharacterContainer";


const EpisodePage = React.memo((props) => {

    const {name, episode, air_date} = props

    return (
        <div className={style.wrapEpisodePage}>
            <h2>Episode Name: {name}</h2>
            <h3>{episode}</h3>
            <h3>{air_date}</h3>
            <div>
                <h3>Characters in this episode:</h3>
                <CharacterContainer/>
            </div>
        </div>
    )
})
export default EpisodePage
