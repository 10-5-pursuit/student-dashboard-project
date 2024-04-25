import './cohortList.scss';
import React from 'react';
import { useState } from 'react';

const CohortList = ({ data, setSelectCohort }) => {
  const cohorts = [...new Set(data.map(cohort => cohort.cohort.cohortCode))];

  const handleCohortClick = (cohort) => {
    setSelectCohort(cohort);
  }

  return (
    <div className='cohortList'>
      {cohorts.map((cohort, index) => (
        <div className="cohortList__cohorts" key={index} onClick={() => handleCohortClick(cohort)}>
          <h2 className='cohortList__cohort'>{cohort}</h2>
        </div>
        
      ))}
    </div>
  );
};



export default CohortList;

