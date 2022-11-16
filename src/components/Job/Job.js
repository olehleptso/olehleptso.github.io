import './Job.css';
import {Link} from 'react-router-dom';

function Job({data, id}) {
    return (
        <div className='job'>
            <div className='picture'>
                <img src={data.pictures[0]}></img>
            </div>
            <div className='info'>
                <Link to={`/job/${id}`}>
                    <p className='title'>{data.title}</p>
                </Link>
                <p className='gray'>Department name - Allgemeines Krankenhaus der Stadt Wien - AKH</p>
                <p className='gray'>Vienna, Austria</p>
            </div>
            <div className='saved'>
                
            </div>
        </div>
    );
}

export default Job;