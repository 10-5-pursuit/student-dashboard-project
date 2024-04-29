import React from "react";
import './studentList.scss'
import { useState } from "react";
import CommentSection from "../commentSection/CommentSection";


const StudentList = ({ data, selectCohort, showAllStudents , sortStudents, searchBar, filterStatus }) => {
    const [ openExtraDetails, setOpenExtraDetails] = useState(null);

    
    const middleNameToInitial = (middleName) => {
        return middleName ? middleName[0] : '';
    }

    const monthNumberToString = (month) => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months[month - 1];
    } 

    let students = showAllStudents ? data : (selectCohort ? data.filter(student => 
       student.cohort.cohortCode === selectCohort) : []);

    const checkStatus = (  certifications, score ) => {
        return certifications.resume && certifications.linkedin && certifications.github && certifications.mockInterview && score > 600 ? 'On Track' : 'Off Track';
};

    students = sortStudents !== 'none' ? students.sort((a , b) => {
        const dateA = new Date(a.dob);
        const dateB = new Date(b.dob);
        return sortStudents === 'asc' ? dateA - dateB : dateB - dateA;
}) : students;

    students = students.filter(student => {
        const fullName = `${student.names.preferredName || ''} ${student.names.surname || ''}`.toLowerCase();

   const status = checkStatus(student.certifications, student.codewars.current.total);

   return (searchBar ? fullName.includes(searchBar.toLowerCase()) : true) && (filterStatus === 'All' || status === filterStatus);
});

return (
    <div className="studentList">
    {students.map((student, index) => (
        <div className="studentList__students" key={student.id}>
          <CommentSection existingNotes={student.notes} />
                <h3>{ checkStatus(student.certifications, student.codewars.current.total) }</h3>
                <img src={student.profilePhoto} alt="image" className="studentList__studentImg"/>
                <h2>{student.names.preferredName} {middleNameToInitial(student.names.middleName)}. {student.names.surname}</h2>
                <p>{student.username}</p>
                <p>Birthday: {monthNumberToString(new Date(student.dob).getMonth() + 1)} {new Date(student.dob).getDate()}, {new Date(student.dob).getFullYear()}</p>
        <button onClick={() => setOpenExtraDetails(openExtraDetails === index ? null : index)} className="studentList__studentButton">
            {openExtraDetails === index ? 'Hide Details' : 'Show Details'}
        </button>
        {openExtraDetails === index && (
                <div className="studentList__details">
                    <div>
                        <h4>Codewars:</h4>
                        <p>Total: {student.codewars.current.total}</p>
                        <p>Last Week: {student.codewars.current.lastWeek}</p>
                        <p>Goal: {student.codewars.goal.total}</p>
                        <p>Percent of Goal Achieved: {Math.round((student.codewars.current.total / student.codewars.goal.total) * 100)}%</p>
                    </div>
                    <div>
                    <h4>Scores:</h4>
                    <p>Assignments: {Math.round((student.cohort.scores.assignments * 100))}%</p>
                    <p>Projects: {Math.round((student.cohort.scores.projects * 100))}%</p>
                    <p>Assessments: {Math.round((student.cohort.scores.assessments * 100))}%</p>
                    </div>
                    <div>
                        <h4>Certifications:</h4>
                        <p>Resume: {student.certifications.resume ? '✅' : '❌'}</p>
                        <p>LinkedIn: {student.certifications.linkedin ? '✅' : '❌'}</p>
                        <p>Mock Interview: {student.certifications.mockInterview ? '✅' : '❌'}</p>
                        <p>GitHub: {student.certifications.github ? '✅' : '❌'}</p>
                    </div>
                </div>
                )}
            </div>
        ))}
    </div>
    
)
}




export default StudentList;