import './Job.css'

function Job({data}) {
  return (
    <div className='job'>
        <p>{data.name}</p>
    </div>
  );
}

export default Job;