import React, { useEffect, useState } from 'react'
import ListItem from './ListItem'

function SearchList({title, searchType, searchResponse}) {


    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [localData, setLocalData] = useState(JSON.parse(localStorage.getItem('list')) || [])

    useEffect(() => {

        document.addEventListener('scroll', (evt) => {

            if(evt.target.documentElement.scrollHeight - (evt.target.documentElement.scrollTop + window.innerHeight) < 1) {
                setPage(prevState => prevState + 1)
            }
            
            return () => {
                document.removeEventListener('scroll')
            }
        })

       

    }, [])

    useEffect(() => {

        async function getData() {
        
        const response = await fetch(`https://api.themoviedb.org/3/search/${searchType}?api_key=9449551dec8662f64c113bec5d422444&query=${searchResponse}&page=${page}&language=ru`)
        const result = await response.json()
          
        setData(prevState => prevState.concat(result.results))

        } 
        getData();
      }, [page])


      useEffect(() => {

        async function getData() {
        
        const response = await fetch(`https://api.themoviedb.org/3/search/${searchType}?api_key=9449551dec8662f64c113bec5d422444&query=${searchResponse}&page=${page}&language=ru`)
        const result = await response.json()
          
        setData(prevState => prevState = result.results)

        } 
        getData();
      }, [searchType])

      useEffect(() => {

        async function getData() {
        
        const response = await fetch(`https://api.themoviedb.org/3/search/${searchType}?api_key=9449551dec8662f64c113bec5d422444&query=${searchResponse}&page=${page}&language=ru`)
        const result = await response.json()
          
        setData(prevState => prevState = result.results)

        } 
        getData();
      }, [searchResponse])

      useEffect(() => {
            
        localStorage.setItem('list', JSON.stringify(localData))
        
    }, [localData])


    return (

        <div className="list-container">
            <h2>{title}</h2>
            <ul className="list">

                {data && data.length > 0 ? data.map((listItem) => (
                    
                        <ListItem   listItem={listItem}
                                    title={listItem.title ? listItem.title : listItem.name}
                                    localData={localData}
                                    setLocalData={setLocalData}
                                    originalTitle={listItem.original_title  ? listItem.original_title : listItem.original_name}
                                    src={listItem.poster_path ? `https://image.tmdb.org/t/p/original/${listItem.poster_path}` : `https://image.tmdb.org/t/p/original/${listItem.profile_path}`}
                                    rating={listItem.vote_average}
                                    description={listItem.overview}
                                    id={listItem.id}
                                    buttonName={'Add to my List'}
                                    bg={listItem.backdrop_path}
                                    type={searchType}
                                    key={listItem.id}
                                    />       
                ) 
                ) : <h3>Sorry we haven't search anythyng. Check your response</h3>}
            </ul>
        </div> 

    )
}

export default SearchList