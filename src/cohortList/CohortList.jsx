import './cohortList.scss';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


const CohortList = ({ data, setSelectCohort }) => {
  const [cohort, setCohort] = useState([]);


  // useEffect hook changes the cohort state with unique and sorted cohort codes whenever data( the prop) changes or updates. Also known as a side effect.
  useEffect(() => {
    const newCohortListOrder = ['Winter', 'Fall', 'Summer', 'Spring'];
    setCohort([...new Set(data.map(c => c.cohort.cohortCode))].sort((a,b) => {
      const [seasonA, yearA] = a.split(/(\d+)/);
      const [seasonB, yearB] = b.split(/(\d+)/);
      return yearB - yearA || newCohortListOrder.indexOf(seasonA) - newCohortListOrder.indexOf(seasonB)
    }));
  }, [data])

  const handleCohortClick = (cohort) => {
    setSelectCohort(cohort);
  }
    

  return (
    <div className='cohortList'>
      {cohort.map((cohort, index) => (
        <div className="cohortList__cohorts" key={index} onClick={() => handleCohortClick(cohort)}>
          <h2 className='cohortList__cohort'>{cohort}</h2>
        </div>
        
      ))}
    </div>
  );
};



export default CohortList;

