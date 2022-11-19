import './Perk.css';

 function Perk({data, type}) {
  return (
    <div className={`perk ${type}`}>{data}</div>
  )
}

export default Perk;
