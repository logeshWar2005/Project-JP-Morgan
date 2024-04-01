import React, { useState } from "react";
import Scissor from './Scissor';
import Paper from './Paper';
import Stone from './Stone';

function Game() {
  const [winner, setWinner] = useState(null);
  const [you, setYou] = useState(0);
  const [rival, setRival] = useState(0);
  const [mine, setMine] = useState(null);
  const [its, setIts] = useState(null);

  const tools = ['Stone', 'Paper', 'Scissor'];
  const map = [2,0,1];

  function checkWinner(I) {
    const It = Math.floor(Math.random() * 3);
    setMine(tools[I]);
    setIts(tools[It]);

    if (map[I] === It) {
      setWinner("You");
      setYou(prevYou => prevYou + 1);
    } else if (I === It) {
      setWinner("draw");
    } else {
      setWinner("Rival");
      setRival(prevRival => prevRival + 1);
    }
  }

  function getResultColor() {
    if (winner === 'You') {
      return { backgroundColor: 'green' };
    } else if (winner === 'Rival') {
      return { backgroundColor: 'red' };
    } else if (winner === 'draw') {
      return { backgroundColor: '#378CE7' };
    }
  }

  return (
    <div className="container">
      <h1 className="title">Stone-Paper-Scissors</h1>
      <div className="container-tools">
        <Stone onClick={() => checkWinner(0)} />
        <Paper onClick={() => checkWinner(1)} />
        <Scissor onClick={() => checkWinner(2)} />
      </div>
      <div className="scores">
        <h1 className="score">YOU: {you}</h1>
        <h1 className="score">RIVAL: {rival}</h1>
      </div>
      <h1 className="result" style={getResultColor()}>
        {winner === 'You' ? `You win!, your ${mine} beats ${its}` :
          winner === 'Rival' ? `You lost, your ${mine} is beaten by ${its}` :
            winner === 'draw' ? `It's draw` : `Play your move`}
      </h1>
    </div>
  );
}

export default Game;
