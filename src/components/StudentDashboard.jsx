import React, { useState } from 'react';

function StudentDashboard() {
    
    const studentsData = [
        // { name: 'John Doe', image: 'https://via.placeholder.com/150', major: 'Computer Science', grade: 'A', season: 'spring', year: '2022' },
        // { name: 'Jane Smith', image: 'https://via.placeholder.com/150', major: 'Biology', grade: 'B', season: 'fall', year: '2022' },
        // { name: 'Alex Johnson', image: 'https://via.placeholder.com/150', major: 'Mathematics', grade: 'A-', season: 'summer', year: '2022' }
    ];

    //season and year
    const [selectedSeason, setSelectedSeason] = useState('spring');
    const [selectedYear, setSelectedYear] = useState('2022');

    // generate cards based on selected season and year
    const generateCards = () => {
        return studentsData
            .filter(student => student.season === selectedSeason && student.year === selectedYear)
            .map(student => (
                <div className="card" key={student.name}>
                    <img src={student.image} alt={student.name} />
                    <p>Name: {student.name}</p>
                    <p>Major: {student.major}</p>
                    <p>Grade: {student.grade}</p>
                </div>
            ));
    };

    return (
        <div className="student-dashboard">
            <div className="left-column">
                <div className="option-list">
                    <label htmlFor="season">Season:</label>
                    <select id="season" value={selectedSeason} onChange={e => setSelectedSeason(e.target.value)}>
                        <option value="spring">Spring</option>
                        <option value="summer">Summer</option>
                        <option value="fall">Fall</option>
                    </select>
                </div>
                <div className="option-list">
                    <label htmlFor="year">Year:</label>
                    <select id="year" value={selectedYear} onChange={e => setSelectedYear(e.target.value)}>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                    </select>
                </div>
            </div>
            <div className="right-column">
                {generateCards()}
            </div>
        </div>
    );
}

export default StudentDashboard;
