import React from 'react'
import rick from '../../../assets/loading.png'
import style from './Loader.module.css'


export const Loader = () => {
    return (
        <div className={style.loaderWrap}>
            <img src={rick} alt="Loading..."  className={style.rickLoad}/>
        </div>
    )
}
