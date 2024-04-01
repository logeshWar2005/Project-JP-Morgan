import paper from '../images/Paper.png';

function Paper({onClick}){
  return(
    <div className='card'  onClick={onClick}>
      <img className="img" src={paper} alt="Papers"/>
    </div>
  );
}

export default Paper;