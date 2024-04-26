import React, {useEffect, useState} from "react";
import './index.css'
import Header from './Components/Header'
import Cohort from './Components/Cohort'
import StudentList from './Components/StudentList'
import StudentCard from './Components/StudentCard'
import students from  '../data/data.json'




function App() {
  const [ currentCohort, setCurrentCohort] =useState('All Students')
  const [currentStudents, setCurrentStudents] =useState(students)
  useEffect(()=> {
    const filterStudents = students.filter(student => {
      if(currentCohort === 'All Students'){
        return true;
      }
      return student.cohort.cohortCode === currentCohort.split(' ').join('')
    })
    setCurrentStudents(filterStudents)
  },[currentCohort])
return (
    <div className='App'>
      <Header />
      <Cohort setCurrentCohort={setCurrentCohort} />
      <StudentList currentCohort={currentCohort} currentStudents={currentStudents} setCurrentStudents={setCurrentStudents}/>
      
        
   

      
      

    </div>
  );
}

export default App;
