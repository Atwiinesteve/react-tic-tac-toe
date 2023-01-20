// import react
import React, { useState } from 'react';

// import styles
import "../components/Board.css";

// importing components
import Square from './Square';

// Board Component
function Board({ xIsNext, squares, onPlay }) {

    // setting state
    // const [squares, setSquares ] = useState(Array(9).fill(null));
    // const [ xIsNext, setXIsNext ] = useState(true)

    // updating Board state
    function handleClick(i) {
        if(squares[i] || determineWinner(squares)) {
            return;
        }
        const nextSqaures = squares.slice();
        if(xIsNext) {
            nextSqaures[i] = "X";
        } else {
            nextSqaures[i] = "O";
        }
        onPlay(nextSqaures);
    };

    // determining winner
    const winner = determineWinner(squares);
    let status;
    if(winner) {
        status = `Winner is: ${winner}`;
    } else {
        status = `Next Player is: ${( xIsNext ? "X" : "O")}..`
    }

  return (
		<>
            <div className="status">{status}</div>
			<div className="board--row">
				<Square onSquareClick={() => handleClick(0)} value={squares[0]} />
				<Square onSquareClick={() => handleClick(1)} value={squares[1]} />
				<Square onSquareClick={() => handleClick(2)} value={squares[2]} />
			</div>

			<div className="board--row">
				<Square onSquareClick={() => handleClick(3)} value={squares[3]} />
				<Square onSquareClick={() => handleClick(4)} value={squares[4]} />
				<Square onSquareClick={() => handleClick(5)} value={squares[5]} />
			</div>

			<div className="board--row">
				<Square onSquareClick={() => handleClick(6)} value={squares[6]} />
				<Square onSquareClick={() => handleClick(7)} value={squares[7]} />
				<Square onSquareClick={() => handleClick(8)} value={squares[8]} />
			</div>
		</>
	);

};

// determine winner function
function determineWinner(squares) {
    const winnings = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for(let i = 0; i < winnings.length; i++) {
        const [ a, b, c] = winnings[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
};


// export board
export default Board;
