import React from 'react';

// data
import boxData from '../boxesData';

// child comps
import Box from './box';

export default function Boxes(props){
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from boxes.js X
     * 2. Map over that state array and display each one
     *    as an empty square (black border, transparent bg color)
     *    (Don't worry about using the "on" property yet) X
     */

    // Challenge: use a ternary to determine the backgroundColor. X
    // If darkMode is true, set it to "#222222"
    // If darkMode is false, set it to "#cccccc"

    /**
     * Challenge part 2:
     * 1. Create a separate component called "Box" and
     *    replace the `div` with our <Box /> components X
     * 2. Pass the Box component a prop called `on` with the
     *    value of the same name from the `boxes` objects
     * 3. In the Box component, apply dynamic styles to determine
     *    the backgroundColor of the box. If it's `on`, set the
     *    backgroundColor to "#222222". If off, set it to "none"
     */

    // const styles = {
    //     backgroundColor: props.darkMode ? "#222222" : "#cccccc"
    // };
    
    const [arrayBoxes, setArrayBoxes] = React.useState(boxData);

    const jsxBoxes = arrayBoxes.map(box => <div key={box.id} className='box' ></div>);
    // style={styles} (removed from ↑ so it doesn't change the bg colour)

    console.log(boxData.map(key => key))

    return (
        <main className='bg-white w-100 p-5 d-flex gap-3'>
            <Box
            data={boxData.map(dat => dat)}
            />
        </main>
    );
};