import React from 'react'
import { useState } from 'react';
import DropMenu from './DropMenu';
const StudentCard = ({ fellow }) => {

    const [ viewInfo, setViewInfo ] = useState( false );

    const { resume, github, linkedin, mockInterview } = fellow.certifications;

    const codeWarTotal = fellow.codewars.current.total;

    const checkStatus = resume && github && linkedin && mockInterview && codeWarTotal > 600;

    

    return (
    <>

    <li key= {fellow.id} > 
        <img src= {fellow.profilePhoto} />
        <section>
            <strong>{ `${ fellow.names.preferredName } ${ fellow.names.middleName[0] } ${ fellow.names.surname }` }</strong>
                <p>{fellow.username}</p>
                <p>
                <span className='dob'>Birthday: </span>{fellow.dob}
                </p>

        </section>

        <p>
        { checkStatus ? <span className='on-track'>On-Track to Graduation</span> 
        : 
        <span className='off-track'>Off-Track to Graduation</span> 
    } 
        </p>
    <DropMenu viewInfo={ viewInfo } setViewInfo = { setViewInfo } fellow={ fellow }/>
    </li> 

    </>
    )

}

export default StudentCard