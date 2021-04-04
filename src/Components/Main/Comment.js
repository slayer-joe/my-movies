import React from 'react'


function Comment({comment}) {

    return(
        <div className="comment_item">
            <img src="https://via.placeholder.com/100" alt="authorlogo"/>
            <div className="comment_text_block">
                <h3 className="comment_author_name">{comment.name}</h3>
                <p className="comment_text">{comment.body}</p>
                <p className="comment_email">{comment.email}</p>
            </div>
        </div>
    )
}

export default Comment