import React from "react";
import { useState } from "react";

const CommentSection = ( { existingNotes }) => {
    const [commenter, setCommenter] = useState('');
    const [comment, setComment] = useState('');
    const [ notes, setNotes ] = useState( existingNotes || []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setNotes([...notes, { commenter, comment }]);
        setCommenter('');
        setComment('');
    };

    return (
        <div>
            <h3>1-on-1 Notes</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Commentor Name: 
                    <input type="text" value={commenter} onChange={(e) => 
                        setCommenter(e.target.value)} />
                </label>
                <label htmlFor="">
                    Comment: 
                    <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <ul>
                {notes.map((note, index) => (
                    <li key={index}>
                        <p>{note.commenter}: {note.comment}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CommentSection