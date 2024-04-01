import scissor from '../images/Scissor.png';

function Scissor({onClick}){
  return(
    <div className='card' onClick={onClick}>
      <img className="img" src={scissor} alt="Scissors"/>
    </div>
  );
}

export default Scissor;