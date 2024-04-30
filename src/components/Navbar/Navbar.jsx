import React, { useState } from 'react';
import './components/styles/navbar.scss'; 

const Navbar = () => {
    // const [selectedSeason, setSelectedSeason] = useState('');
    // const [selectedYear, setSelectedYear] = useState('');

    // const handleSeasonChange = (e) => {
    //     const selectedValue = e.target.value;
    //     setSelectedSeason(selectedValue);

        
    //     if (selectedValue === "spring") {
    //         // Fetch data for spring
    //         fetchDataForSpring();
    //     } else if (selectedValue === "summer") {
    //         // Fetch data for summer
    //         fetchDataForSummer();
    //     } else if (selectedValue === "fall") {
    //         // Fetch data for fall
    //         fetchDataForFall();
    //     }
    // };

    return (
        <div className="container">
            
            <h2>Choose a Class by Start Date</h2>
            <ul className="option-list">
                    <li value="spring26">Spring:2026</li>
                    <li value="summer26">Summer:2026</li>
                    <li value="fall26">Fall:2026</li>
                    <li value="spring25">Spring:2025</li>
                    <li value="summer25">Summer:2025</li>
                    <li value="fall25">Fall:2025</li>
            </ul>
           
        </div>
      
    );
}

export default Navbar;