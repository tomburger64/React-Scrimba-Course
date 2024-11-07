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
        {/* indirectly passing the toggle func as an anon arrow function
         * this allows to pass the id prop as a parameter
         * as it gets rendered inside the parent component with the correct id
         * (key doesn't work because it's a unique kind of prop, hence the id prop)
         */}
            <button 
            className='box' 
            style={{background: onStatus ? "#222" : "transparent"}} 
            onClick={()=>props.toggle(props.id)} ></button>
        </>
    );
};