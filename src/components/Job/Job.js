import './Job.css';
import {Link} from 'react-router-dom';

function Job({data, id}) {
    return (
        <div className='job'>
            <div className='mobile'>
                <h2 className='secondary'> Posted 2 days ago</h2>
            </div>
            <div className='inner'>
                <div className='picture'>
                    <img src={data.pictures[0]}></img>
                </div>
                <div className='info'>
                    <Link to={`/job/${id}`}>
                        <h2 className='primary'>{data.title}</h2>
                    </Link>
                    <h2 className='secondary'>Department name - Allgemeines Krankenhaus der Stadt Wien - AKH</h2>
                    <h2 className='secondary'>Vienna, Austria</h2>
                </div>
                <div className='saved'>
                    <h2 className='secondary'> Posted 2 days ago</h2>
                </div>
            </div>
        </div>
    );
}

export default Job;