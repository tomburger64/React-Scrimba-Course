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