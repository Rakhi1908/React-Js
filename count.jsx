import React, { useState } from 'react';

export default function Count() {
    const [state, setState] = useState(0);

    function Inc() {
        setState(prev => prev + 1);
    }

    function Dec() {
        setState(prev => prev - 1);
    }

    function Reset() {
        setState(0);
    }

    return (
        <div>
            <h2>Count is {state}</h2>
            <button onClick={Inc}>Increment</button>
            <button onClick={Dec}>Decrement</button>
            <button onClick={Reset}>Reset</button>
        </div>
    );
}
