// import react;
import React from 'react';

// square component
function Square({ value, onSquareClick }) {

    // setting state
//     const [ value, setValue ] = useState(null);

//     // handling events
//     function handleClick() {
//         setValue("X");
//     }

//   return <button className="square" onClick={handleClick}>{ value }</button>;

    return <button className="square" onClick={onSquareClick}>{ value }</button>

};

// export square component
export default Square;
