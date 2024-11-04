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

    // adding state to change the bg color onclick while still depending on the props
    const [onState, setOnState] = React.useState(props.on);

    console.log(props.on)
    console.log(onState);


    function switchOnOff(){
        console.log(props.on)
        console.log(setOnState(values => values)) //← WHY IS IT BECOMING UNDEFINED AAAAAAAAAAH
    };

    const boxes = onState.map(box => {

        // div → btn (accessibility)
        return (
        <button
        className='box'
        key={Math.random()}
        style={{backgroundColor: box.on ? "#222222" : "none"}}
        onClick={switchOnOff}
        ></button>
)});
    
    return(
        <>
            {boxes}
        </>
    );
};