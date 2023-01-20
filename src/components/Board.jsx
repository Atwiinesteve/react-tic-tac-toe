// import react
import React from 'react';

// import styles
import "../components/Board.css";

// importing components
import Square from './Square';

// Board Component
function Board() {

  return (
		<>
			<div className="board--row">
				<Square />
				<Square />
				<Square />
			</div>

			<div className="board--row">
				<Square />
				<Square />
				<Square />
			</div>

			<div className="board--row">
				<Square />
				<Square />
				<Square />
			</div>
		</>
	);

};

// export board
export default Board;
