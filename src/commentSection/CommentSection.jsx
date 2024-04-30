import React, { useState } from 'react';
import Modal from '../modal/Modal'; 
import './commentSection.scss'

const CommentSection = ({ existingNotes }) => {
    const [commenter, setCommenter] = useState('');
    const [comment, setComment] = useState('');
    const [notes, setNotes] = useState(existingNotes || []);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        setNotes([...notes, { commenter, comment }]);
        setCommenter('');
        setComment('');
    };

    return (
        <div className='comments'>
            {show ? (
                <Modal show={show} handleClose={handleClose}>
                    <h3 className="comments__title">1-on-1 Notes</h3>
                    <form onSubmit={handleSubmit} className='comments__form'>
                        <label className='comments__label'>
                            Commentor Name: 
                            <input type="text" value={commenter} onChange={(e) => 
                                setCommenter(e.target.value)} />
                        </label>
                        <label className='comments__label'>
                            Comment: 
                            <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
                        </label>
                        <input type="submit" value="Submit" className='comments__submit'/>
                    </form>
                    <ul className="comments__list">
                        {notes.map((note, index) => (
                            <li key={index} className="comments__item">
                                <p className="comments__commentor">{note.commenter}: <span className="comments__comment">{note.comment}</span></p>
                            </li>
                        ))}
                    </ul>
                </Modal>
            ) : (
                <i className="fa-regular fa-comments comments__icon" onClick={handleShow}></i>
            )}
        </div>
    );
};

export default CommentSection;
