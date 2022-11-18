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
        <div className='container'>
            <div className='outer'>
                <div className='inner'>
                    <div className='jobinfo'>
                        <div className='flex'>
                            <h2>Job Details</h2>
                        </div>
                        <div className='flex'>
                            <h2>Save to my list</h2>
                            <h2>Share</h2>
                        </div>
                    </div>
                    <button className='standart'>
                        Apply Now
                    </button>
                    <h2>Title here</h2>
                    <h2 className='secondary'> Posted 2 days ago</h2>
                </div>
                <div className='map'>
                </div>
            </div>
        </div>
    );
}

export default JobInfo;