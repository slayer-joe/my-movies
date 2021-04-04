import React from 'react'
import { useHistory } from 'react-router'




function ListItem({title, originalTitle, src, rating, description, id, bg, group, type, listItem, setLocalData, buttonName, localData}) {

const history = useHistory()

function clickHandler() {
    
    history.push(`/${type}/${id}`, {
        title, 
        originalTitle, 
        src, 
        rating, 
        description, 
        id,
        bg,
        group,
        type
    })
}

function setWishList() {
    if(buttonName === 'Add to my List') {

        listItem.type = type

        setLocalData(prevState => [...prevState, listItem])
               
    } else if(buttonName === 'delete from list') {
        
        const newStore = JSON.parse(localStorage.getItem('list')).filter((item) => {
            return item.id !== id
        })
        localStorage.setItem('list', JSON.stringify(newStore))
        setLocalData(newStore)
       
    }
     
}


return(

    <li className="item">
        <img src={src} alt={title} className="film-image"  onClick={() => clickHandler()}/>
            <div className="info-block">
                <h2 className="name">{title} / {originalTitle}</h2>
                {type !== 'person' ? <p className="rating">Rating: {rating}</p> : ''}
                <p className="description">{description}</p>
                {type !== 'person' ? <button onClick={() => {setWishList()}}>{buttonName}</button> : ''}
            </div>
    </li>
)

}

export default ListItem