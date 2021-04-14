import React from "react";
import style from './Header.module.css'


const Header = () => {

    return (
        <div className={style.container}>
            <h1>Rick and Morty</h1>
            <div className={style.toolbar1}>
                <button>1 Season</button>
                <button>2 Season</button>
                <button>3 Season</button>
                <button>4 Season</button>
                <button >All Episodes</button>
            </div>
            <div className={style.toolbar1}>
                <button>Sort</button>
                <input />
            </div>

        </div>
    );
};

export default Header;
