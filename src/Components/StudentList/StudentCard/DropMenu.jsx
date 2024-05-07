import React from 'react'
import CommentSection from './CommentSection/CommentSection';
const DropMenu = ({ viewInfo, setViewInfo, fellow }) => {
    
  let percentGoal = Math.round((fellow.codewars.current.total / fellow.codewars.goal.total) * 100);

  return (
    <div className='certs-scores'>
      <div>
      { viewInfo ? <span onClick={() => { setViewInfo(!viewInfo) } }>Show Less...</span> : <span onClick={() => { setViewInfo(!viewInfo) } }>Show More...</span> }
      </div>
      
    { viewInfo && 
    <div className='details'>
      <div >
        <p><strong>CodeWars</strong></p>
        <p> <span>Current Total:</span> {fellow.codewars.current.total}</p>
        <p><span>Last Week:</span> {fellow.codewars.current.lastWeek}</p>
        <p><span>Goal:</span> {fellow.codewars.goal.total}</p>
        <p><span>Percent Goal Achieved:</span> { ` ${percentGoal}%` } </p>
      </div>

      <div>
        <p><strong>Scores</strong></p>
        <p><span>Assignments:</span> {`${fellow.cohort.scores.assignments * 100}%`}</p>
        <p><span>Projects:</span> {`${fellow.cohort.scores.projects * 100}%`}</p>
        <p><span>Assessments:</span> {`${fellow.cohort.scores.assessments * 100}%`}</p>
      </div>

      <div>
        <p><strong>Certifications</strong></p>
        <p><span>Resume:</span> {fellow.certifications.resume ? "✅": "❌"}</p>
        <p><span>LinkedIn:</span> {fellow.certifications.linkedin ? "✅": "❌"} </p>
        <p><span>Mock Interview:</span> {fellow.certifications.github ? "✅": "❌"}</p>
        <p><span>Github:</span> {fellow.certifications.mockInterview ? "✅": "❌"}</p>
      </div>
      <>
      <hr />
      <div className="comments">
      <CommentSection fellow = { fellow }/>
      </div>
      </>
      </div> 
      } 
    </div>
  )
}

export default DropMenu;