import React from "react";
import { useState } from "react";

const NavBar = ({ data, setSearchBar, setFilterStatus}) => {
    const [ searchName , setSearchName ] = useState('');
    const [ filterStudents, setFilterStudents ] = useState('All');

    const handleSearchBar = (e) => {
        setSearchName(e.target.value);
        setSearchBar(e.target.value);
    };

    const handleFilterStatus = (e) => {
        setFilterStudents(e.target.value);
        setFilterStatus(e.target.value)
    };

    return (
        <div className="navBar">
            <input type="text" placeholder="Search by Name" value={searchName} onChange={handleSearchBar}/>
            <select value={filterStudents} onChange={handleFilterStatus}>
                <option value="All">All</option>
                <option value="On Track">On Track</option>
                <option value="Off Track">Off Track</option>
            </select>
        </div>
    );
};

export default NavBar;