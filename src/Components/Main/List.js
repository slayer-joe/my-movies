import React, {useState, useEffect} from 'react'
import ListItem from './ListItem'


function List({type, title, group}) {

    const [page, setPage] = useState(1)
    const [data, setData] = useState([])
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
    
        const response = await fetch(`https://api.themoviedb.org/3/${type}/${group}?api_key=9449551dec8662f64c113bec5d422444&language=ru&page=${page}`)
        const result = await response.json()
        
        setData(prevState => prevState.concat(result.results))
       
        }
        
        getData();
    
        
      }, [page, group, type])  


      useEffect(() => {

        localStorage.setItem('list', JSON.stringify(localData))
            
      }, [localData])

return (

            <div className="list-container">
                <h1>{title}</h1>
                <ul className="list">
                    
                    {data.map((listItem, i) => (
                        
                            <ListItem listItem={listItem}
                                    setLocalData={setLocalData}
                                    localData={localData}
                                    title={listItem.title ? listItem.title : listItem.name}
                                    originalTitle={listItem.original_title  ? listItem.original_title : listItem.original_name}
                                    src={listItem.poster_path ? `https://image.tmdb.org/t/p/original/${listItem.poster_path}` : `https://image.tmdb.org/t/p/original/${listItem.profile_path}`}
                                    rating={listItem.vote_average}
                                    description={listItem.overview}
                                    id={listItem.id}
                                    bg={listItem.backdrop_path}
                                    buttonName={'Add to my List'}
                                    type={type}
                                    group={group}
                                    key={listItem.id + i}/>            
  
                    ) 
                    )}
                </ul>
        </div> 
)

}

export default List