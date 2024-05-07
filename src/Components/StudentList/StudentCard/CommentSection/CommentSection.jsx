import React from 'react'
import { useState } from 'react'
import '../CommentSection/CommentSection.scss'
const CommentSection = ({ fellow }) => {
    const [currentCommenter, setCurrentCommenter] = useState('');
    const [comment, setComment] = useState('');




return (
    <div className='comment-container'>
        
    <div className="comment-container__title">
        <strong>1-on-1 Notes</strong>
    </div>

    <div className="comment-container__commenter-section">
        <label htmlFor='commenter' >Commenter Name: </label>
        <input  id= "commenter" type="text" name='commenter' placeholder='Your Name' onChange={(e)=>{ setCurrentCommenter(e.target.value)}}/>
        <label htmlFor='comment'>Comment: </label>
        <input  id= "comment" type="text" name='comment' placeholder='Your Comment Here' onChange={(e)=>{ setComment(e.target.value)}}/>
        <button className='addbtn'>Add Note</button>
    </div>

    <ul className='comment-container__comments'>


    </ul>
    
    
    
    
    
    </div>
  )
}

export default CommentSection