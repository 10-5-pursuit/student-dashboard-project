import './StudentList.scss'
import StudentCard from './StudentCard'




export default function StudentList ({currentCohort, currentStudents, setCurrentStudents}) {
    return (
        <div className='student-list'>
            <div>{currentCohort}</div>
            <div>TotalStudents: <span>{currentStudents.length}</span></div>
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