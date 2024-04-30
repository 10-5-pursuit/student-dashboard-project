import React, { useState } from 'react';
// import '../data/data.json'; 

const Card = ({ student }) => {
    const { name, imageUrl, email, birthday, additionalInfo } = student;
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="student-card">
            <img src={imageUrl} alt={name} />
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Birthday: {birthday}</p>
            {showMore && (
                <div className="additional-info">
                    <p>Gender: {additionalInfo.gender}</p>
                    <p>Address: {additionalInfo.address}</p>
                    <p>Phone: {additionalInfo.phone}</p>
                    {/* Add more additional information as needed */}
                </div>
            )}
            <button onClick={toggleShowMore}>
                {showMore ? 'Show Less' : 'Show More'}
            </button>
        </div>
    );
};

export default Card;


