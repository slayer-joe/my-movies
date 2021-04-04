import React from 'react'
import Promo from './Promo'
import FilmRow from './FilmRow'

function Main() {


    const responseType = {
        tv: 'tv',
        movie: 'movie',
        person: 'person'
    }
  
    const responseGroup = {
      popular: 'popular',
      top_rated: 'top_rated',
      upcoming: 'upcoming',
      now_playing: 'now_playing'
    }

    return (
        <React.Fragment>
        
        <Promo /> 
        <FilmRow title={'POPULAR MOVIES'}
                group={responseGroup.popular}
                type={responseType.movie}/>

        <FilmRow title={'TOP RATED'}
                 group={responseGroup.top_rated}
                 type={responseType.movie}/>

        <FilmRow title={'UPCOMING'}
                 group={responseGroup.upcoming}
                 type={responseType.movie}/>

        <FilmRow title={'NOW PLAYING'}
                 group={responseGroup.now_playing}
                 type={responseType.movie}/>
        </React.Fragment>
 
    )

}

export default Main