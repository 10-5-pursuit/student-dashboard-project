import React from "react";
import './studentList.scss'

const StudentList = ({ data, selectCohort, showAllStudents , sortStudents, searchBar, filterStatus }) =>{

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