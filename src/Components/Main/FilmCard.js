import React, {useEffect, useState} from 'react'
import CommentBlock from './CommentBlock'



function FilmCard( {location} ) {

    const [trailer, setTrailer] = useState('')

useEffect(() => {


    async function getData() {
       
    const response = await fetch(`https://api.themoviedb.org/3/${location.state.type}/${location.state.id}/videos?api_key=9449551dec8662f64c113bec5d422444&language=en`)

    const result = await response.json()

        if(result.results && result.results.length > 0) {

              setTrailer(result.results[0].key)
        }
  
    }

    getData()
    
}, [trailer])


return(

        <div className="card_item_container" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${location.state.bg})`}}>
            <div className="card_item">
            <div className="card_head">
            <img src={location.state.src} alt={location.state.title} className="film-image" />
            <div className="info-block">
                <h2 className="name">{location.state.title} / {location.state.originalTitle}</h2>
                <p className="rating">Rating: {location.state.rating}</p>
                <p className="description">{location.state.description}</p>
            </div>
            </div>
            <div className="iframe_container">
            <iframe src={`https://www.youtube.com/embed/${trailer}`} frameBorder="1px solid black" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={location.state.title}></iframe>
            </div>
                <CommentBlock />
            </div>   
        </div>

)

}

export default FilmCard