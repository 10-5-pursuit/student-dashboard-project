import React, { useEffect, useState } from 'react';
import '../StudentList/StudentList.scss';
import StudentCard from './StudentCard/StudentCard';

const StudentList = ({ data, cohort, displayNames }) => {

  

      const cohortBySeason = data.filter(byCohort => { 
        return byCohort.cohort.cohortCode === cohort
      })


    

  return (

  <>

  { cohort === 'All Students' ? 
  
  <div className='student-container'>

    <div className='students-and-count'>
        <h3>{cohort}</h3> 

        <p>Total Students: <span>{ data.length }</span></p> 

    </div>

    <div>
        <ul>

          { data.map((fellow, i ) => {
            
            return (

              <StudentCard fellow = { fellow } key ={fellow.id}  />

          )
          })}
        </ul>
    </div>
  
</div>

  : 
  
  <div className='student-container'>

    <div className='students-and-count'>

      <h3>{ displayNames( cohort ) }</h3> 
      <p>Total Students: <span>{ cohortBySeason.length }</span></p> 

    </div>
    <div>
      <ul>
        { cohortBySeason.map((fellow, i) => {

          return (

            <StudentCard fellow = { fellow } key ={fellow.id}  />

        )
        })}
      </ul>
    </div>
  </div>
  
  }

</>
)
}

export default StudentList