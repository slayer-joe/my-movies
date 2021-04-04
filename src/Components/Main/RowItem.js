import React from 'react'
import { useHistory } from 'react-router'


function RowItem({title, originalTitle, src, rating, description, id, bg, type, group}) {


    

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
        type,
        group
    })
}

return(

    <li>
    <img src={src} alt={title}  className="film" onClick={() => {clickHandler()}}/>
</li>
)


}

export default RowItem