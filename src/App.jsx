import React from 'react';
import StudentDashboard from './components/StudentDashboard';
import './components/App.css';

function App() {
  return (
    <div>
      <header className="header">Student Dashboard</header>
      <div className="container">
        <div className="left-column">
          <h3 className="options-header">Choose a Class by Start Date</h3>
          <ul className="options">
            <li>All Students</li>
            <li>Winter 2026</li>
            <li>Fall 2026</li>
            <li>Summer 2026</li>
            <li>Spring 2026</li>
            <li>Winter 2025</li>
            <li>Fall 2025</li>
            <li>Summer 2025</li>
            <li>Spring 2025</li>
          </ul>
        </div>
        <div className="right-column">
          <StudentDashboard />
        </div>
      </div>
    </div>
  );
}

export default App;

