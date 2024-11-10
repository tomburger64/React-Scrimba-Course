import React from 'react';

// data
import boxData from '../boxesData';

// child comps
import Box from './box';

export default function Boxes(props){
    
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
            {boxData.map(box => (
                <Box key={box.id} id={box.id} on={box.on} toggle={toggle} />
            ))}
        </main>
    );
};