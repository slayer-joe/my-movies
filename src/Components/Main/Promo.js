import React, {useEffect, useState} from 'react'

function Promo () {

    const [data, setData] = useState([])
    const randomFilm = data[Math.floor((Math.random() * 20))]


    
   useEffect(() => {

    async function getData() {

    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=9449551dec8662f64c113bec5d422444&language=ru&page=1`)
    const result = await response.json()
    setData(prevState => prevState.concat(result.results))

    }
    
    getData();

    
  }, [])


    return (
        <React.Fragment>
            
            {data.length > 0 ?   <div className="promo-container" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${randomFilm.backdrop_path})`}}>
            <div className="film-info">
                <div className="title">
                    <h2 className="name">{randomFilm.title} / {randomFilm.original_title}</h2>
                    <p className="rating">Rating: {randomFilm.vote_average}</p> 
                </div>
            </div>
        </div> : ''}
          
        
        </React.Fragment>
        
        

    )

}

export default Promo