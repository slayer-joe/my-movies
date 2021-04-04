import React, { useEffect, useRef, useState } from 'react'
import Comment from './Comment'

function CommentBlock() {

    const [commentList, setCommentList] = useState([])
    const [randomId, setRandomId] = useState(1)
    const title = useRef()
    const text = useRef()
    const mail = useRef()
    

    useEffect(() => {

        let random = Math.floor((Math.random() * 20))

        setRandomId(random)

    }, [])

    useEffect( () => {

        async function getData() {

            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${randomId}/comments`)

            const result = await response.json()
    
            console.log(result)
    
            setCommentList(result)
        }

        getData();
       
    }, [randomId])

    function sendComment(text, mail, title) {

        let newComment = {
            body: text.current.value,
            email: mail.current.value,
            name: title.current.value
        }

         if(text.current.value.trim() !== '' &&
            mail.current.value.trim() !== '' &&
            title.current.value.trim() !== ''
            ) {
                setCommentList(prevState => [...prevState, newComment])
            }
        

    }

    return (
        <div className="comment_block">

            <h2 className="comment_block_title">Comments</h2>

            {commentList.map((item, i) => {
                return <Comment comment={item}
                                key={i}/>
            })}
            
            <form name="comments" className="comment_form" action="">
                <label htmlFor="comment_title">
                Message title:*
                <input type="text" placeholder="Enter comment title" ref={title} id="comment_title"></input>
                </label>
                <label htmlFor="comment_text">
                Message text:*
                <input type="text" placeholder="Enter your comment" className="comment_text_field" ref={text}  id="comment_text"></input>
                </label>                
                <label htmlFor="comment_email">
                Author email:*
                <input type="text" placeholder="Enter your e-mail" className="comment_email_field" ref={mail}  id="comment_email"></input>
                </label>
                <button type="button" className="comment_form_btn" onClick={() => {sendComment(text, mail, title)}}>Send</button>
            </form>

        </div>
        


    )
}

export default CommentBlock