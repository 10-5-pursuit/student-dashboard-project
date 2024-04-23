import React from "react";
import './studentList.scss'

const StudentList = ({ data, selectCohort, showAllStudents}) =>{
    let students = showAllStudents ? data : (selectCohort ? data.filter(student => student.cohort.cohortCode === selectCohort) : data);

    return (
        <div className="studentList">
            {students.map((student, index) => (
                <div className="studentList__students" key={index}>
                    <img src={student.profilePhoto} alt="" />
                    <h2>{student.names.preferredName} {student.names.middleName} {student.names.surname}</h2>
                    <p>{student.username}</p>
                    <p>Birthday: {student.dob}</p>
                </div>
            ))}
        </div>
    )
}



export default StudentList;