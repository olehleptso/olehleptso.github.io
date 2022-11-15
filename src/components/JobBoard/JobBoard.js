import Job from '../Job/Job';
import './JobBoard.css';
import { useState, useEffect } from 'react';

function JobBoard() {
    

    const [jobs, setJobs] = useState([])

      useEffect(() => {
        fetch('https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu')
            .then(response => response.json())
            .then(data => 
                setJobs(data)
            )},[]);

    return (
        <div className='board'>
            {jobs.map((data, index) => {
                return <Job data={data} key={index}></Job>
            })}
        </div>  
    );
}

export default JobBoard;