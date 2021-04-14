import React, {useState} from "react";
import style from './Header.module.css'
import {appAPI} from "../dal/api";
import useDebounce from "../hooks/useDebounce";


const Header = (props) => {
    const [inputValue, setInputValue] = useState("");

    const searchEp = () => {
        appAPI.searchEpisode(inputValue).then(res => console.log(res))
    }
    const debouncedSearch= useDebounce(searchEp, 700)
    const onChangeHandler = e => {
        setInputValue(e.target.value)
        debouncedSearch(e.target.value)
    }
    return (
        <div className={style.container}>
            <h1>Rick and Morty</h1>
            <div className={style.toolbar1}>
                <button onClick={props.getS1}>1 Season</button>
                <button onClick={props.getS2}>2 Season</button>
                <button onClick={props.getS3}>3 Season</button>
                <button onClick={props.getS4}>4 Season</button>
                <button >All Episodes</button>
            </div>
            <div className={style.toolbar1}>
                <button>Sort Date</button>
                <input
                    type="text"
                    name="search"
                    id="search"
                    value={inputValue}
                    placeholder="Search by episode name"
                    onChange={onChangeHandler}
                />
            </div>
        </div>
    );
};

export default Header;
