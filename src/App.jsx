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
  const [ selectCohortReadable, setSelectCohortReadable ] = useState('No Students');
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
    setShowAllStudents(prevShowAllStudents => {
      const newShowAllStudents = !prevShowAllStudents;
      const readableCohortName = newShowAllStudents ? 'All Students' : 'No Students';
      setSelectCohortReadable(readableCohortName);
      return newShowAllStudents;
    });
    setSelectCohort(null);
  }

  const handleCohortClick = (cohort) => {
    setSelectCohort(cohort.original);
    setSelectCohortReadable(cohort.readable);
  }

  return (
    <div className="app">
      <CohortList data={data} title="Pursuit" toggleShowAllStudents={toggleShowAllStudents} setSelectCohort={setSelectCohort} setSelectCohortReadable={setSelectCohortReadable} handleCohortClick={handleCohortClick} setShowAllStudents={setShowAllStudents} showAllStudents={showAllStudents}/>
      <div className="app__navAndStudent">
        <NavBar data={data} setSearchBar={setSearchBar} setFilterStatus={setFilterStatus} />
        <div className="app__studentContainer">
          <div className="app__headerApp">
        <div className="app__total"> {selectCohortReadable} <span>({totalStudents})</span></div>
        <select onChange={handleSortChange}>
          <option value="none">Select</option>
          <option value="asc"> ↑ DOB</option>
          <option value="desc">↓ DOB</option>
        </select>
        </div>
        <StudentList data={data} selectCohort={selectCohort} sortStudents={sortStudents} handleSortChange={handleSortChange} searchBar={searchBar} filterStatus={filterStatus} showAllStudents={showAllStudents} selectedCohort={selectCohort} />
        </div>
      </div>
    </div>
  );
  
  
}



export default App;

