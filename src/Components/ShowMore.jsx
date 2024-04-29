import React from 'react'
// import students from  '../data/data.json'

export default function ShowMore({student}) {
  return (
    <div>
    <div className="student-codewars">
                <div>CodeWars:</div>
                  <p><span>Current Total:</span></p>
                  <p><span>Last Week</span></p>
                  <p><span>Goal:</span></p>
                  <p><span>Percentage of Goal Achieved</span></p>
              </div>

              <div className="student-scores">
                <div>Scores:</div>
                  <p><span>Assignments:</span></p>
                  <p><span>Projects:</span></p>
                  <p><span>Assessments:</span></p>
              </div>

              <div className="student-certifications">
                  <div>Certifications:</div>
                  <p><span>Resume:</span></p>
                  <p><span>LinkedIn:</span></p>
                  <p><span>Mock Interview:</span></p>
                  <p><span>GitHub:</span></p>
              </div>

              </div>
  )
}
