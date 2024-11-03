import React from 'react';

// css
import './style/boxes-ex.css';

export default function Box(props){

    // const style
    
    const boxes = props.stateArray.map(box => (
        <div
        className='box'
        key={box.id}
        style={{backgroundColor: box.on ? "#222222" : "none"}}
        ></div>
    ))
    

    return(
        <>
            {boxes} {console.log(boxes)}
        </>
    )
}