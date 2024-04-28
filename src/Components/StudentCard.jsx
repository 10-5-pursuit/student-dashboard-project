import './StudentCard.scss'


export default function StudentCard ({student}) {
    return (
        <div className="student-container">
            <div className="student-card" key={student.id}>
              <div className="student-card__img">
                <img src={student.profilePhoto} alt="student img" />
              </div>
              <div className='student-card__info'>
                <div className="student-card__name">
                  {student.names.preferredName + " " + student.names.middleName + " " + student.names.surname}
                </div>
                  <div className="student-card__email">
                    {student.username}
                  </div>
                  <div className="student-card__dob">
                    <span>Birthday:</span> {student.dob}
                    </div>
                  </div>
                  <p onClick={} className='student-card__show'>Show More...</p>
            </div>
          
    

      </div>
    )
}