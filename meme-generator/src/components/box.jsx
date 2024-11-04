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

    // adding state so we can change the bg color onclick while still depending on the original props
    const [onState, setOnState] = React.useState(props.stateArray.map(box => box.on));

    console.log("onstate log ........... " + onState);



    // div → btn (accessibility)
    const boxes = props.stateArray.map(box => {

        // use box temp var from the map func used here ↑
        // to change the on value of the state elem at the right index without losing the whole state array as you change it ytguhik
        function switchOnOff(){
            setOnState();
            console.log(onState)
        };

        return (
        <button
        className='box'
        key={box.id}
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