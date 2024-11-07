import React from 'react';

// css
import './style/boxes-ex.css';

export default function Box(props){

    /**
     * Challenge: Create state controlling whether
     * this box is "on" or "off". Use the incoming
     * `props.on` to determine the initial state.
     * 
     * Create an event listener so when the box is clicked,
     * it toggles from "on" to "off".
     * 
     * Goal: clicking each box should toggle it on and off.
     */

    const [onStatus, setOnStatus] = React.useState(props.on);

    function switchBg(){
        setOnStatus(prevOnStatus => !prevOnStatus);
    };
    
    return(
        <>
            <button className='box' style={{background: onStatus ? "#222" : "transparent"}} onClick={props.toggle}></button>
        </>
    );
};