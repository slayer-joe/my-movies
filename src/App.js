import React, { useState } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Main from './Components/Main/Main'
import Header from './Components/Header/Header'
import List from './Components/Main/List'
import Favourites from './Components/Main/Favourites'
import SearchList from './Components/Main/SearchList'
import FilmCard from './Components/Main/FilmCard' 
import PersonCard from './Components/Main/PersonCard'


function App() {

 

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

  const [searchType, setSearchType] = useState('movie')
  const [searchResponse, setSearchResponse] = useState('')

  return (
    <BrowserRouter>
      <div className="App">
          <Header setSearchType={setSearchType}
                  setSearchResponse={setSearchResponse}
                />
          <Route exact path="/" component={Main}></Route>

          <Route exact path="/movies/popular">
              <List title={'Popular movies'}
                    group={responseGroup.popular}
                    type={responseType.movie}
                    />
          </Route>
          <Route exact path="/movies/top_rated">
              <List title={'TOP RATED'}
                    group={responseGroup.top_rated}
                    type={responseType.movie}/>
          </Route>
          <Route exact path="/tv">
              <List title={'TV shows'}
                    group={responseGroup.popular}
                    type={responseType.tv}/>
          </Route>
          <Route exact path="/dairy">
              <Favourites title={'My favourite'}
                          />
          </Route>
          <Route exact path="/search-list">
              <SearchList title={'Results'}
                          searchType={searchType}
                          searchResponse={searchResponse}
                          />
          </Route>
          <Route exact path={"/" + responseType.movie + "/:id"} component={FilmCard}/>
          <Route exact path={"/" + responseType.tv + "/:id"} component={FilmCard}/>
          <Route exact path={"/" + responseType.person + "/:id"} component={PersonCard}/>
    </div>
    </BrowserRouter>
  
  );
}

export default App;
