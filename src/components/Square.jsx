// import react;
import React, { useState } from 'react';

// square component
function Square() {

    // setting state
    const [ value, setValue ] = useState(null);

    // handling events
    function handleClick() {
        setValue("X");
    }

  return <button className="square" onClick={handleClick}>{ value }</button>;

};

// export square component
export default Square;
