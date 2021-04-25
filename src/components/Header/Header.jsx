import React, {useState} from "react";
import style from './Header.module.css'
import {useDispatch} from "react-redux";
import {fetchSeasonTC, searchEpisodeTC} from "../../bll/reducer";
import {NavLink, useHistory} from "react-router-dom";
import {PATH} from "../../Routes";
import logo from "../../assets/logo_title.png";
import SuperButton from "../common/Button/SuperButton";

const Header = React.memo(() => {
    const [inputValue, setInputValue] = useState("");
    let history = useHistory()
    const dispatch = useDispatch()
    const searchEp = () => {
        dispatch(searchEpisodeTC(inputValue))
        setInputValue('')
    }
    const getSeason = (season) => {
        dispatch(fetchSeasonTC(season))
    }

    const onKeyPressHandler = (e) => {
        if (e.charCode === 13) {
            history.push(PATH.SEASON_PAGE)
            searchEp()
        }
    }

    const onChangeHandler = e => {
        setInputValue(e.target.value)
    }

    return (
        <div className={style.container}>
            <img
                src={logo}
                height="90%"
                width="90%"
                className={style.logo}
                alt="logo"
            />
            <div className={style.toolbar1}>
                <NavLink to={PATH.SEASON_PAGE + '1'} >
                    <SuperButton onClick={() => getSeason('s1')}>1 Season</SuperButton>
                </NavLink>
                <NavLink to={PATH.SEASON_PAGE + 2}>
                    <SuperButton onClick={() => getSeason('s2')}>2 Season</SuperButton>
                </NavLink>
                <NavLink to={PATH.SEASON_PAGE + 3}>
                    <SuperButton onClick={() => getSeason('s3')}>3 Season</SuperButton>
                </NavLink>
                <NavLink to={PATH.SEASON_PAGE + 4}>
                    <SuperButton onClick={() => getSeason('s4')}>4 Season</SuperButton>
                </NavLink>
                <NavLink to={PATH.ALL_EPISODES}>
                    <SuperButton>All Episodes</SuperButton>
                </NavLink>
            </div>
            <div className={style.toolbar1}>
                <input
                    type="text"
                    autoComplete="off"
                    name="search"
                    className={style.superInput}
                    onKeyPress={onKeyPressHandler}
                    value={inputValue}
                    placeholder="Search by episode name"
                    onChange={onChangeHandler}
                />
                <NavLink to={PATH.SEASON_PAGE}><SuperButton onClick={searchEp}>Search</SuperButton></NavLink>
            </div>
        </div>
    );
})

export default Header;
