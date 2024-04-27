import './StudentList.scss'
import StudentCard from './StudentCard'




export default function StudentList ({currentCohort, currentStudents, setCurrentStudents}) {
    return (
        <div className='student-list'>
          <div className='student-list__info'>
          <div>{currentCohort}</div>
            <div>Total Students: <span>{currentStudents.length}</span></div>
            </div>
        {currentStudents.map(student => {
          return (
              <div>
            <StudentCard student={student}  />
            </div>
          )
        })}
        </div>
    )
}