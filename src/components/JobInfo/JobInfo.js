import './JobInfo.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function JobInfo() {
    const {id} = useParams()
    const [job, setJob] = useState({})

      useEffect(() => {
        fetch('https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu')
            .then(response => response.json())
            .then(data => setJob(data[id])
        )},[]);

    return (
        <div className='job'>
            <p>{job.title}</p>
        </div>
    );
}

export default JobInfo;