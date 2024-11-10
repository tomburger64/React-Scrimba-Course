import React from 'react';

// data
import boxData from '../boxesData';

// child comps
import Box from './box';

export default function Boxes(props){

    /**
     * HOW IT ALL WORKS ↓
     * - - - - -
     * boxes.jsx receives the data from the data file (aka "boxData")
     * boxes.js has a state arrayBoxes which defaults to the data
     * 
     * the boxes' data is sent through props to the child component
     * is rendered one child component per box
     * 
     * 
     * 
     * the toggle function takes as parameter "id"
     * id comes from the child comp, which is = to the key but passed as id seperatly
     * id allows to identify each component, hence changing them individually
     * 
     * toggle changes the state value to a new empty array
     * that array receives all the boxes objects contained in the state data
     * and for the one box that has been clicked on (identifiable with its id),
     * it swaps its .on status value
     * toggle then returns the whole empty array (no longer empty)
     * and making it the new state value
     * 
     * 
     * 
     * the toggle function is passed as a prop to each child component
     * child comp renders a box with conditionnal style rendering depending on the .on value
     * and has an onClick event listener with the toggle function passed as a prop
     * the toggle func takes in argument props.id
     * 
     * * * * props.id is equal to the "id" parameter as the toggle func is triggered * * *
     * (this is how it sends specific data back to the parent which has all comps mixed)
     */

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
    
    // correction commented
        // id comes from the rendered box comp
        function toggle(id) {
            setArrayBoxes(prevBoxes => {
                // empty array to not change the state directly
                const newBoxes = [];
                // for as much as boxes there are in the state:
                for(let i = 0; i < prevBoxes.length; i++) {
                    // var that's = to the current object processing in the loop
                    const currentBox = prevBoxes[i];
                    // if the currently processed box has the same id as the one clicked on (received through the id parameter)
                    if(currentBox.id === id) {
                        // creates var updated box containing everything the processed box has and swapping its .on value on/off
                        const updatedBox = {
                            ...currentBox,
                            on: !currentBox.on
                        };
                        // push the .on swapped box back to the empty array created earlier
                        newBoxes.push(updatedBox);
                    }
                    // and if the id of the box != the id of the currently processed box, directly return it to the empty array
                    else {
                        newBoxes.push(currentBox);
                    };
                };
                return newBoxes;
            });
        };

    return (
        // my struggle was that I was rendering ONE component (that rendered all its boxes individually), passing the on prop like the exercise asks and then trying to switch the bg colour of each comp individually on click (might be possible but there's just so much simpler too)
        // tldr i hate myself lol
        <main className='bg-white w-100 p-5 d-flex gap-3'>
            {arrayBoxes.map(box => (
                <Box key={box.id} id={box.id} on={box.on} toggle={toggle} />
            ))}
        </main>
    );
};