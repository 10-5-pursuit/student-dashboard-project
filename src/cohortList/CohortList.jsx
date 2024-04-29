import './cohortList.scss';
import React from 'react';
import { useState, useEffect } from 'react';

const CohortList = ({ data, title, toggleShowAllStudents, showAllStudents, handleCohortClick })  => {
  const [  cohort, setCohort ] = useState([]);

  useEffect(() => {
    const newCohortListOrder = ['Winter', 'Fall', 'Summer', 'Spring'];
    setCohort([...new Set(data.map(c => c.cohort.cohortCode))].sort((a,b) => {
      const [seasonA, yearA] = a.split(/(\d+)/);
      const [seasonB, yearB] = b.split(/(\d+)/);
      return yearB - yearA || newCohortListOrder.indexOf(seasonA) - newCohortListOrder.indexOf(seasonB)}).map(cohortCode => {
        const [season, year] = cohortCode.split(/(\d+)/);
        return { original: cohortCode, readable: `${season} ${year}`};
      }));
  }, [data])

  return (
    <div className='cohortList'>
      <div className="cohortList__title">{title}</div>
      <button onClick={toggleShowAllStudents} className="cohortList__cohortButton">
        {showAllStudents ? 'Hide All Students' : 'Show All Students'}
      </button>
      {cohort && cohort.map((c, index) => (
        <div className="cohortList__cohorts" key={index} onClick={() => handleCohortClick(c)}>
          <h2 className='cohortList__cohort'>{c.readable}</h2>
        </div>
      ))}
    </div>
  );
};



export default CohortList;

