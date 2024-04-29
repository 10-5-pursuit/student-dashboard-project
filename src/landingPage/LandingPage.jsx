import React from "react";
import pursuit from '../pursuit2.png'
import App from "../App";
import { useState } from "react";
import './landingPage.scss'


const LandingPage = () => {
    const [ startApp, setStartApp ] = useState(false);

    const handleLogoClick = () => {
        setStartApp(true);
    }

    if(startApp) {
        return <App />
    }

    return (
        <div className="landingPage">
            <h1 className="landingPage__header">Welcome To</h1>
           <div className="landingPage__img-container"> <img src={pursuit} alt="pursuit" onClick={handleLogoClick} style={{cursor: 'pointer'}} className="landingPage__img" />
           </div>
            <p className="landingPage__para">Click the logo to get started</p>
        </div>
    );
}

export default LandingPage;