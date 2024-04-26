import React from "react";
import { useState, useMemo } from "react";
import './app.scss'
import data from './data/data.json'
import CohortList from "./cohortList/CohortList";
import StudentList from "./studentList/StudentList";
import NavBar from "./navBar/NavBar";


function App() {
  const [ selectCohort, setSelectCohort ] = useState(null);
  const [ showAllStudents, setShowAllStudents ] = useState(false);
  const [ selectCohortReadable, setSelectCohortReadable ] = useState('All Students');
  const [ sortStudents, setSortStudents ] = useState('none');
  const [ searchBar, setSearchBar] = useState('');
  const [ filterStatus, setFilterStatus ] = useState('All');


  const totalStudents = useMemo(() => {
    return showAllStudents ? data.length : selectCohort ? data.filter(student => student.cohort.cohortCode === selectCohort).length : 0;
}, [data, showAllStudents, selectCohort]);

const handleSortChange = (e) => {
  setSortStudents(e.target.value);
}

const toggleShowAllStudents = () => {
  setShowAllStudents(prevShowAllStudents => !prevShowAllStudents);
  setSelectCohort(null);
  const readableCohortName = showAllStudents ? 'No Students' : 'All Students';
  setSelectCohortReadable(readableCohortName);
}

const handleCohortClick = (cohort) => {
  setSelectCohort(cohort);
  setShowAllStudents(false);
  const readableCohortName = `${cohort.season} ${cohort.year}`;
  setSelectCohortReadable(readableCohortName);
}

return (
    <div className="app">
      <NavBar data={data} setSearchBar={setSearchBar} setFilterStatus={setFilterStatus} />
      <div>Pursuit</div>
      <div>
      <button onClick={toggleShowAllStudents}>
        {showAllStudents ? 'Hide All Students' : 'Show All Students'}
      </button>
      <CohortList data={data} setSelectCohort={setSelectCohort} setSelectCohortReadable={setSelectCohortReadable} onCohortClick={handleCohortClick} toggleShowAllStudents={toggleShowAllStudents}/>
      <div> {selectCohortReadable} <span>({totalStudents})</span></div>
      <select onChange={handleSortChange}>
        <option value="none">Select</option>
        <option value="asc"> ↑ DOB</option>
        <option value="desc">↓ DOB</option>
    </select>
   <StudentList data={data} selectCohort={selectCohort} sortStudents={sortStudents} handleSortChange={handleSortChange} searchBar={searchBar} filterStatus={filterStatus} showAllStudents={showAllStudents} selectedCohort={selectCohort} />
      </div>
    </div>
  );
}


export default App;

