import './App.scss';
import CohortList from './Components/CohortList/CohortList';
import StudentList from './Components/StudentList/StudentList';
import studentData from '/Users/eliwills/Desktop/Pursuit/Lab-Work/student-dashboard-project/src/data/data.json'
import React, { useState } from 'react';


function App() {
// Variable for data
  let data = studentData;
  const [cohort, setCohort] = useState("All Students");
  const[students, setStudents] = useState(data)


//Utilizes the cohortCode, seperates and adds a space between the year and season then returns it as a string. ✅
  const displayNames = ( cohort ) => {
  
    let splitCohort = cohort.split('');

        splitCohort.splice(-4,0,' ');
    
    let joinedStringCohort = splitCohort.join(''); 
    
    return joinedStringCohort;

  }

  
  return (
<>
<section className='Cohort-List'> <CohortList setcohort = { setCohort } displayNames = { displayNames }/> </section>
      <div className='navbar'>
          <h1>Student Dashboard</h1>
      </div>
      <StudentList data = { data } cohort = { cohort }  displayNames = { displayNames }/>
    </>
  );
}

export default App;