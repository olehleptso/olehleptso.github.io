import Job from '../Job/Job';
import './JobBoard.css';
import { useState } from 'react';

function JobBoard() {
    const initialJobs = [
        {name:"1"},
        {name:"2"},
        {name:"3"},
        {name:"4"},
        {name:"5"},
        {name:"6"},
        {name:"7"},
        {name:"8"},
    ]
    const [jobs, setjobs] = useState(initialJobs)

    return (
        <div className='board'>
            {jobs.map((data, index) => {
                return <Job data={data} key={index}></Job>
            })}
        </div>  
    );
}

export default JobBoard;