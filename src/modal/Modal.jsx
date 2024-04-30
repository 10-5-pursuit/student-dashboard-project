import React from 'react';
import './modal.scss'; 

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal__main">
                {children}
                <i className="fa-regular fa-comments modal__icon" onClick={handleClose}></i>
            </section>
        </div>
    );
};

export default Modal;


