import React, {useState } from 'react'
import ListItem from './ListItem'

function Favourites() {

  
    const favourites = JSON.parse(localStorage.getItem('list'))
    const [localData, setLocalData] = useState(JSON.parse(localStorage.getItem('list')) || [])
    
    

    return (
        <div className="favourites">
                 <h2>Favourites</h2>
                {favourites.length > 0 ? favourites.map((listItem, i) => {
                    return <ListItem  title={listItem.title ? listItem.title : listItem.name}
                                        localData={localData}
                                        setLocalData={setLocalData}
                                        originalTitle={listItem.original_title  ? listItem.original_title : listItem.original_name}
                                        src={listItem.poster_path ? `https://image.tmdb.org/t/p/original/${listItem.poster_path}` : `https://image.tmdb.org/t/p/original/${listItem.profile_path}`}
                                        rating={listItem.vote_average}
                                        description={listItem.overview}
                                        id={listItem.id}
                                        type={listItem.type}
                                        buttonName={'delete from list'}
                                        bg={listItem.backdrop_path}
                                        key={listItem.id + i}/>
                }) : <h3>The List is EMPTY</h3>}
        </div>
   

    )
}

export default Favourites