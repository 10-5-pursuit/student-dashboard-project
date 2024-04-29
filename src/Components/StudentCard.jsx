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
                  <p className='student-card__show'>Show More...</p>
            </div>

              {/* <div className="student-codewars">
                <div>CodeWars:</div>
                  <p><span>Current Total:</span></p>
                  <p><span>Last Week</span></p>
                  <p><span>Goal:</span></p>
                  <p><span>Percentage of Goal Achieved</span></p>
              </div>

              <div className="student-scores">
                <div>Scores:</div>
                  <p><span>Assignments:</span></p>
                  <p><span>Projects:</span></p>
                  <p><span>Assessments:</span></p>
              </div>

              <div className="student-certifications">
                  <div>Certifications:</div>
                  <p><span>Resume:</span></p>
                  <p><span>LinkedIn:</span></p>
                  <p><span>Mock Interview:</span></p>
                  <p><span>GitHub:</span></p>
              </div>

     */}

      </div>



        
    )
}