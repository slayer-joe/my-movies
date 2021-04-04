import React from 'react'
import {NavLink} from 'react-router-dom'

function Nav() {


    return (

        <div className="nav-container">
            <NavLink to="/movies/popular">POPULAR</NavLink>
            <NavLink to="/movies/top_rated">TOP250</NavLink>
            <NavLink to="/tv">TV Shows</NavLink>
            <NavLink to="/dairy">My favourite</NavLink>

        </div>

    )

}

export default Nav