import React from 'react';

// data
import boxes from '../boxesData';

// css
import './style/boxes-ex.css';

export default function Boxes(){
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from boxes.js X
     * 2. Map over that state array and display each one
     *    as an empty square (black border, transparent bg color)
     *    (Don't worry about using the "on" property yet)
     */
    
    const [arrayBoxes, setArrayBoxes] = React.useState(boxes);
    const mappedBoxes = arrayBoxes.map(box => <div key={box.id} className='box'></div>);
    
    return (
        <main className='bg-white w-100 p-5'>
            <div className='d-flex gap-3'>{mappedBoxes}</div>
        </main>
    );
};