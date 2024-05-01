import React from 'react';
import StudentList from './components/Card/Card.jsx';
import './components/styles/app.scss'; 
import Navbar from './components/Navbar/Navbar.jsx'

function App() {
  return (
    <div className='pageContainer'>
      
      <Navbar />
      <CohortList />
      <StudentList student={studentData}/>
    </div>
  
  );
}

export default App;

