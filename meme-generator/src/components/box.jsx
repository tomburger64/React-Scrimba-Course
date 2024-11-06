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
    const [boxData, setBoxData] = React.useState(props.isOn);

    console.log(boxData)
    function switchOnOff(){
    };

    const boxes = boxData.map(box => {
        // div → btn (accessibility)
        return (
        <button
        className='box'
        key={Math.random()}
        style={{backgroundColor: box.isOn ? "#222222" : "transparent"}}
        onClick={switchOnOff}
        ></button>
)});
    
    return(
        <>
            {boxes}
        </>
    );
};