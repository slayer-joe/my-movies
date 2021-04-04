import React, {useRef} from 'react'
import {Link} from 'react-router-dom'
import Nav from './Nav'
import logo from '../../img/logo.png'


function Header({setSearchType, setSearchResponse}) {

    const search = useRef()
    const changeList = useRef()
   

    const clickToSearch = (e) => {
        if(search.current.value !== '') {
            setSearchResponse(search.current.value)
            search.current.value = ''
        }
      
        }

    const changeType = (changeList) => {
        setSearchType(changeList.current.options[changeList.current.selectedIndex].value)
        console.log(changeList.current.options[changeList.current.selectedIndex].value)   
    }


    return (

        <div className="header">
        <Link to="/">
            <div className="logo-container">
                <h1 className="logo">My movies</h1>
                <img src={logo} alt="logo"/>
            </div>
           

        </Link>
            <Nav/>
            <div className="search">
                <select size="1" name="types" ref={changeList} onChange={()=>{changeType(changeList)}}>
                    
                    <option value="movie">movies</option>
                    <option value="tv">TV show</option>
                    <option value="person">People</option>
                </select>
                    <input type="text" name="search" id="search" placeholder="search" ref={search}/>
                    <Link to='/search-list'>
                        <button className="search-btn" onClick={(e) => clickToSearch(e)}>search</button>
                    </Link>
                    
            </div>  
        </div>
    )
}

export default Header