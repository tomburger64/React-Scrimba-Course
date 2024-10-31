// https://v2.scrimba.com/learn-react-c0e/~02g
// course exercise, off the original project

import React from "react"

import "./style/counter.css"

export default function Counter() {
    const [count, setCount] = React.useState(0);
    
    function add() {
        setCount(prevCount => prevCount + 1);
    };
    
    function subtract() {
        setCount(prevCount => prevCount - 1);
    };
    
    /**
     * https://v2.scrimba.com/learn-react-c0e/~02r
     * Challenge:
     * - Create a new component named Count
     *    - It should receive a prop called `number`, whose value
     *      is the current value of our count
     *    - Have the component render the whole div.counter--count
     *      and display the incoming prop `number`
     * - Replace the div.counter--count below with an instance of
     *   the new Count component
     */

    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    );
};