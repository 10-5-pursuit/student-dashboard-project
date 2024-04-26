import './cohortList.scss';
import React from 'react';
import { useState, useEffect } from 'react';

const CohortList = ({ data, setSelectCohort, setSelectCohortReadable })  => {
  const [cohort, setCohort] = useState([]);
  


  // useEffect hook changes the cohort state with unique and sorted cohort codes whenever data (the prop) changes or updates. Also known as a side effect.
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

  const handleCohortClick = (c) => {
    setSelectCohort(c.original);
    setSelectCohortReadable(c.readable)
  }


  
  return (
    <div className='cohortList'>
    <div className="cohortList__cohorts">
    </div>
    {cohort && cohort.map((c, index) => (
      <div className="cohortList__cohorts" key={index} onClick={() => handleCohortClick(c)}>
        <h2 className='cohortList__cohort'>{c.readable}</h2>
      </div>
    ))}
  </div>
  
  );
  
};



export default CohortList;

