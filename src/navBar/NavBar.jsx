import React from "react";
import { useState } from "react";
import './navBar.scss'
import pursuitLogo from '../pursuitLogo.png'

const NavBar = ({ setSearchBar, setFilterStatus}) => {
    const [ searchName , setSearchName ] = useState('');
    const [ filterStudents, setFilterStudents ] = useState('All');

    const handleSearchBar = (e) => {
        setSearchName(e.target.value);
    };

    const handleSearchClick = (e) => {
        e.preventDefault();
        setSearchBar(searchName);
        setSearchName('');
    }

    const handleFilterStatus = (e) => {
        setFilterStudents(e.target.value);
        setFilterStatus(e.target.value)
    };

    return (
        <div className="navBar">
            <div className="navBar__searchAndFilter">
            <form onSubmit={handleSearchClick} className="navBar__searchBar">
            <input type="text" placeholder="Search by Name" value={searchName} onChange={handleSearchBar} className="navBar__searchInput"/>
            <button type="submit" className="navBar__searchButton">🔍</button>
            </form>
            <select value={filterStudents} onChange={handleFilterStatus} className="navBar__filter">
                <option value="All">All</option>
                <option value="On Track">On Track</option>
                <option value="Off Track">Off Track</option>
            </select>
            </div>
            <img src={pursuitLogo} alt="pursuitLogo" className="navBar__pursuitLogo" />
        </div>
    );
};

export default NavBar;