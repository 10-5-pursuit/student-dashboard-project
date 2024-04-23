import React from "react";
import { useState } from "react";
import './app.scss'
import data from './data/data.json'
import CohortList from "./cohortList/CohortList";
import StudentList from "./studentList/StudentList"

function App() {
  const [ selectCohort, setSelectCohort ] = useState(null);
  const [ showAllStudents, setShowAllStudents ] = useState(false);

  const handleShowAllStudents = () => {
    !showAllStudents ? setSelectCohort(null) : null;
    setShowAllStudents(!showAllStudents);
  }

  return (
    <div className="app">
      <div>Pursuit</div>
      <div>
      <button onClick={() => handleShowAllStudents()}>
        {showAllStudents ? 'Hide All Students' : 'Show All Students'}
      </button>
      <CohortList data={data} setSelectCohort={setSelectCohort} />
      {showAllStudents ? <StudentList data={data} /> : selectCohort && <StudentList data={data} selectCohort={selectCohort} />}
      </div>
    </div>
  );
}


export default App;

