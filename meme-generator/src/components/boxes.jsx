import React from 'react';

// data
import boxData from '../boxesData';

// child comps
import Box from './box';
import boxesData from '../boxesData';

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
     *    value of the same name from the `boxes` objects X
     * 3. In the Box component, apply dynamic styles to determine
     *    the backgroundColor of the box. If it's `on`, set the
     *    backgroundColor to "#222222". If off, set it to "none" X
     */

    /**
     * Challenge: Create a toggle() function that logs
     * "clicked!" to the console X
     * 
     * Pass that function down to each of the Box components
     * and set it up so when they get clicked it runs the function X
     */

    // const styles = {
    //     backgroundColor: props.darkMode ? "#222222" : "#cccccc"
    // };
    
    const [arrayBoxes, setArrayBoxes] = React.useState(boxData);

        /**
     * Challenge: use setArrayBoxes to update the
     * correct square in the array.
     * 
     * Make sure not to directly modify state!
     * 
     * Hint: look back at the lesson on updating arrays
     * in state if you need a reminder on how to do this
     */
        function toggle(id){
            // console.log(arrayBoxes[id - 1]); // ← this is probably the way
            // console.log(id);
            // ↑ returns the correct box
    
            // 1 call the right box object without map (else calling an int won't work)
            // 2 switch its on value
    
            console.log(id)
            console.log(arrayBoxes[id-1])
            setArrayBoxes(prevArrayBoxes => {
                let boxObj = prevArrayBoxes[id-1];
                boxObj.on = !boxObj.on
                return boxObj
            });
        };

    const jsxBoxes = arrayBoxes.map(box => <div key={box.id} className='box' ></div>);
    // style={styles} (removed from ↑ so it doesn't change the bg colour)

    return (
        // my struggle was that I was rendering ONE component (that rendered all its boxes individually), passing the on prop like the exercise asks and then trying to switch the bg colour of each comp individually on click (might be possible but there's just so much simpler too)
        // tldr i hate myself lol
        <main className='bg-white w-100 p-5 d-flex gap-3'>
            {boxesData.map(box => (
                <Box key={box.id} id={box.id} on={box.on} toggle={toggle} />
            ))}
        </main>
    );
};