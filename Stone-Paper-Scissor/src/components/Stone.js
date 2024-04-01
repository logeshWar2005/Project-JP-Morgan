import stone from '../images/Stone.png';

function Stone({onClick}){
  return(
    <div className='card' onClick={onClick}>
      <img className="img" src={stone} alt="Stones" onClick={onClick}/>
    </div>
  );
}

export default Stone;