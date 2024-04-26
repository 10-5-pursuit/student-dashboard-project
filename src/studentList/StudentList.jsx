import React from "react";
import { useState } from "react";
import './studentList.scss'

const StudentList = ({ data, selectCohort, showAllStudents , sortStudents, handleSortChange }) =>{

    let students = showAllStudents ? data : (selectCohort ? data.filter(student => student.cohort.cohortCode === selectCohort) : data);

const checkStatus = (  certifications, score ) => {
    return certifications.resume && certifications.linkedin && certifications.github && certifications.mockInterview && score > 600 ? 'On Track' : '';
};

students = sortStudents !== 'none' ? students.sort((a , b) => {
    const dateA = new Date(a.dob);
    const dateB = new Date(b.dob);
    return sortStudents === 'asc' ? dateA - dateB : dateB - dateA;
}) : students;

    return (
        <div className="studentList">
            {students.map((student, index) => (
                <div className="studentList__students" key={index}>
                    <h3>{ checkStatus(student.certifications, student.codewars.current.total) }</h3>
                    <img src={student.profilePhoto} alt="image" />
                    <h2>{student.names.preferredName} {student.names.middleName} {student.names.surname}</h2>
                    <p>{student.username}</p>
                    <p>Birthday: {student.dob}</p>
                </div>
            ))}
        </div>
        
    )
}



export default StudentList;