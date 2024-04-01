import React,{ useState } from 'react';
import X from './X';
import O from './O';

function Board() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turnX, setTurnX] = useState(true);
  const [winner, setWinner] = useState(null);

  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (board) => {
    for (let i = 0; i < winningConditions.length; i++) {
      const [a, b, c] = winningConditions[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return true;
      }
    }
    return false;
  };

  const checkDraw = (board) => {
    return board.every((cell) => cell !== null);
  };

  const handleClick = (index) => {
    if (winner || board[index] !== null) return;

    const newBoard = [...board];
    newBoard[index] = turnX ? 'X' : 'O';
    setBoard(newBoard);
    setTurnX(!turnX);

    if (checkDraw(newBoard)) {
      setWinner('draw');
      return;
    }

    if (checkWinner(newBoard)) {
      return;
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurnX(true);
    setWinner(null);
  };

  const renderMessage = () => {
    if (winner === 'draw') {
      return 'It\'s a draw!';
    } else if (winner) {
      return `${winner} wins!`;
    } else {
      return ' ';
    }
  };

  return (
    <div className='screen'>
      <h1 className='title'>TIC-TAC-TOE</h1>
        <div className='board'>
          {board.map((value, index) => (
            <button
              key={index}
              className='box'
              onClick={() => handleClick(index)}
              disabled={value !== null || winner}
              style={{ background: value === 'X' ? '#ff6347' : value === 'O' ? '#4169e1' : '#fff' }}
            >
              {value === 'X' ? <X /> : value === 'O' ? <O /> : null}
            </button>
          ))}
        </div>
        <div className='message'>{renderMessage()}</div>
      <button className='btn' onClick={resetGame}>
        {winner || checkDraw(board) ? "New Game" : "Reset Game"}
      </button>
    </div>
  );
}

export default Board;