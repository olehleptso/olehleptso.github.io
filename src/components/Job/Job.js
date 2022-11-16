import './Job.css'

function Job({data}) {
    return (
        <div className='job'>
            <div className='picture'>
                <img src={data.pictures[0]}></img>
            </div>
            <div className='info'>
                <p className='title'>{data.title}</p>
                <p className='gray'>Department name - Allgemeines Krankenhaus der Stadt Wien - AKH</p>
                <p className='gray'>Vienna, Austria</p>
            </div>
            <div className='saved'>
                
            </div>
        </div>
    );
}

export default Job;