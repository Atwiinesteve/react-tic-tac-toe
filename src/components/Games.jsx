// import react
import React, { useState } from 'react';

// import styles
// import "../components/Board.css";

// importing components
import Board from '../components/Board';

// Board Component
function Game() {

    // setting state
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentSquares = history[history.length - 1];

    // handle play function
    function handlePlay(nextSquares) {
        setHistory([...history, nextSquares]);
        setXIsNext(!xIsNext);
    }

  return (
		<>
            <div className="game--board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game--status">
                
            </div>
		</>
	);

};

// export board
export default Game;
