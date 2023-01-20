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
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];

    // handle play function
    function handlePlay(nextSquares) {
        const nextHistory = [ ...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length - 1);
        setXIsNext(!xIsNext);
    };

    // jump to move
    function jumpTo(nextMove) {
        setCurrentMove(nextMove)
        setXIsNext(nextMove % 2 === 0)
    };

    // moves
    const moves = history.map((squares, move) => {
        let description;
        if(move > 0) {
            description = "Go to move #" + move
        } else {
            description = "Go to Game start.."
        }
        return (
            <>
                <li key={move}>
                    <button onClick={() => jumpTo(move)} >{ description }</button>
                </li>
            </>
        )
    })

  return (
		<>
            <div className="game--board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game--status">
                <ol>{moves}</ol>
            </div>
		</>
	);

};

// export board
export default Game;
