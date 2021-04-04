import React, { useState, useEffect, useRef } from 'react'

import RowItem from './RowItem'


function FilmRow ({title, type, group}) {



    const list = useRef()
    const [pos, setPos] = useState(0);
    const [counter, setCounter] = useState(1)
    const [clickCount, setClickCount] = useState(0);
    const [page, setPage] = useState(1)
    const [data, setData] = useState([])
  

    const changePos = (dir) => {
        if(dir === 'prev' && pos !== 0) {
            setPos(prevState => prevState + 165)
            setCounter(prevState => prevState - 1)
        } else if (dir === 'next') {
            setPos(prevState => prevState - 165)
            setCounter(prevState => prevState + 1)
        }
    }
    
    useEffect(() => {

        async function getData() {
    
        const response = await fetch(`https://api.themoviedb.org/3/${type}/${group}?api_key=9449551dec8662f64c113bec5d422444&language=ru&page=${page}`)
        const result = await response.json()
    
        setData(prevState => prevState.concat(result.results))
        }
        
        getData();
    
        
      }, [page, group, type])

    useEffect(() => {
        if(counter % 15 === 0 && counter > clickCount ) {
            setClickCount(prevState => prevState + 15)
            setPage(prevState => prevState + 1)
        }
    }, [counter, clickCount])


    useEffect(() => {
        list.current.style.transform = `translateX(${pos}px)`
    }, [pos])


    return (
            <div className="film-block">
            <h1>{title}</h1>
                <ul className="film-row" ref={list}>
                    {data.map((film, i) =>
                            <RowItem 
                                    title={film.title ? film.title : film.name}
                                    originalTitle={film.original_title  ? film.original_title : film.original_name}
                                    src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
                                    rating={film.vote_average}
                                    description={film.overview}
                                    id={film.id}
                                    bg={film.backdrop_path}
                                    type={type}
                                    group={group}
                                    key={film.id}/>
                           

                    )}
                </ul>
           
            <button className="btn btn-prev" onClick={() => changePos('prev')}>&#8249;</button>
            <button className="btn btn-next" onClick={() => changePos('next')}>&#8250;</button>
            </div>

    )

}

export default FilmRow