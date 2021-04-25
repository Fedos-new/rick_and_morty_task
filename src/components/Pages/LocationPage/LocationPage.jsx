import React from "react";
import style from "../../Character/Character.module.css"
import CharacterContainer from "../../Character/CharacterContainer";


const LocationPage = React.memo((props) => {

    return (
        <div className={style.wrapEpisodePage}>
            <h2>Location Name: {props.locationPage.name}</h2>
            <h3>Type: {props.locationPage.type}</h3>
            <h3>Dimension: {props.locationPage.dimension}</h3>
            <div>
                <h3>Residents in this location:</h3>
                <CharacterContainer/>
            </div>
        </div>
    )
})
export default LocationPage
