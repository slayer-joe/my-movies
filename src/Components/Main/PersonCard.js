import React, {useEffect, useState} from 'react'



function PersonCard( {location} ) {

    const [personData, setPersonData] = useState({})

    useEffect(() => {
        async function getData() {
        
            const response = await fetch(`https://api.themoviedb.org/3/person/${location.state.id}?api_key=9449551dec8662f64c113bec5d422444&&language=ru`)
            const result = await response.json()
              
            setPersonData(prevState => prevState = result)
            console.log(result)
            } 
            getData();
          }, [location.state.id])



return(
        
        <li className="card_item_container">
            <div className="card_item">
            
            <img src={location.state.src} alt={location.state.title} className="film-image" />
            <div className="info-block">
                <h2 className="name">{personData.name}</h2>
                <p className="birth">Родился: {personData.birthday} в {personData.place_of_birth}</p>
                <p className="popular">Rating: {personData.popularity}</p>
                <p className="biography">{personData.biography ? personData.biography : "Sorry, we haven't got any biography information about this person"}</p>
            </div>
            </div>   
        
    </li>

)

}

export default PersonCard