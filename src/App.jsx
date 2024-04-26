import React from "react";
import { useState, useMemo } from "react";
import './app.scss'
import data from './data/data.json'
import CohortList from "./cohortList/CohortList";
import StudentList from "./studentList/StudentList";
import { FaLongArrowAltDown } from "react-icons/fa";

function App() {
  const [ selectCohort, setSelectCohort ] = useState(null);
  const [ showAllStudents, setShowAllStudents ] = useState(false);
  const [ selectCohortReadable, setSelectCohortReadable ] = useState('All Students');
  const [sortStudents, setSortStudents] = useState('none')

  const handleShowAllStudents = () => {
    showAllStudents ? setSelectCohort(null) : null;
    setShowAllStudents(!showAllStudents);
  }

  const totalStudents = useMemo(() => {
    return showAllStudents ? data.length : selectCohort ? data.filter(student => student.cohort.cohortCode === selectCohort).length : 0;
}, [data, showAllStudents, selectCohort]);

const handleSortChange = (e) => {
  setSortStudents(e.target.value);
}

return (
    <div className="app">
      <div>Pursuit</div>
      <div>
      <button onClick={() => handleShowAllStudents()}>
        {showAllStudents ? 'Hide All Students' : 'Show All Students'}
      </button>
      <CohortList data={data} setSelectCohort={setSelectCohort} setSelectCohortReadable={setSelectCohortReadable} />
      <div> {selectCohortReadable} <span>({totalStudents})</span></div>
      <select onChange={handleSortChange}>
        <option value="none">Select</option>
        <option value="asc"> ↑ DOB</option>
        <option value="desc">↓ DOB</option>
    </select>
      {showAllStudents ? <StudentList data={data} sortStudents={sortStudents} handleSortChange={handleSortChange}  /> : selectCohort && <StudentList data={data} selectCohort={selectCohort}  sortStudents={sortStudents} handleSortChange={handleSortChange}/>}
      </div>
    </div>
  );
}


export default App;

