import './Cohort.scss'

const cohortsArr = ["Winter 2026", "Fall 2026", "Summer 2026", "Spring 2026", "Winter 2025", "Fall 2025", "Summer 2025", "Spring 2025"];

export default function Cohort ({setCurrentCohort}) {
    function handleClick(e) {
        let cohort = e.target.id
        let cohortsArr = cohort.split(' ').join('')
        setCurrentCohort(cohort)
        console.log(cohortsArr)
    }

    return (
        <div className='cohort'>
            <h3 className='cohort-program'>Pursuit</h3>
            <p onClick={()=>setCurrentCohort('All Students')} className='cohort-students'>All Students</p>
            <ul className='cohort-startdate'>
                {cohortsArr.map((cohort, i) => {
                    return (
                        <li id={cohort} key={i} onClick={handleClick}>{cohort} </li>

                    )
                })}
            </ul>
        </div>
    )
}