import React, {useEffect, useRef, useState} from "react";
import style from './Episode/Episode.module.css'
import {appAPI} from "../dal/api";
import Episode from "./Episode/Episode";
import useScroll from "../hooks/useScroll";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../bll/reducer";

const EpisodesList = () => {
    const dispatch = useDispatch()
    const [episode, setEpisode] = useState([])

    const ep= useSelector(state=> state.episodesReducer)

    const [page, setPage] = useState(1)
    const parentRef = useRef()
    const childRef = useRef()
    const observer = useRef();
    // const intersected = useScroll(parentRef, childRef, () => fetchEpisodes(page))
    //
    // useEffect(() => {
    //     dispatch(fetchData(page))
    // },[page])

    useEffect(() => {
        const options = {
            root: parentRef.current,
            rootMargin: '0px',
            threshold: 0
        }
        observer.current = new IntersectionObserver(([target]) => {
            if (target.isIntersecting) {
                console.log('intersected')
                fetchEpisodes(page)
                // setFetch(false)
            }
        }, options)

        observer.current.observe(childRef.current)

        return function () {
            observer.current.unobserve(childRef.current)
        };
    }, [fetchEpisodes,page,observer.current])


    function fetchEpisodes(page) {
        // dispatch(fetchData(page))
        // setEpisode(prev => [...prev, ...res.data.results]);
        // setPage(prev => prev + 1)
        appAPI.getEpisodes(page)
            .then(res => {
                // if (res.data.info.pages >= page)
                    setEpisode(prev => [...prev, ...res.data.results]);
                if(page <= 3) setPage(prev => prev + 1)

                console.log('scroll!!!')
            })
        .catch((e)=> console.log(e))
    }


    return (
        <div ref={parentRef}
            // style={{height: '80vh', overflow: 'auto'}}
             className={style.episodesBlock}
        >
            {episode.map(e => <Episode
                key={e.id}
                name={e.name}
                episode={e.episode}
                airDate={e.air_date}
                characters={e.characters}
            />)}
            <div ref={childRef}
                // style={{height: 20, background: 'green'}}
                 className={style.child}
            />
        </div>
    );
};


export default EpisodesList;
