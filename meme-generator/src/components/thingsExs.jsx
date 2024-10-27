// what was done before I made this file:

// exercise "break" (still inside the course)
    // https://v2.scrimba.com/learn-react-c0e/~029
    // const [things, setThings] = React.useState(["Thing 1", "Thing 2"])
    
    // function addItem() {
    //     const newThingText = `Thing ${things.length + 1}`
    //     setThings(prevState => [...prevState, newThingText]);
    //     event.preventDefault();
    // }
    
    // const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)
    // also added a button on top that triggers the function (will be deleted once the exercise is done)

    // - - - - -

import React from 'react';

export default function ThingsExs() {
    /**
     * Challenge: See if you can do it all again by yourself :)
     */
    
    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"]);

    function addItem() {
        setThingsArray(prevThingsArray => {
            return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`];
        });
        // had to cheat for the spread opp cuz I didn't realize I put a '+' instead of ','
    };
    
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>);
    console.log(thingsArray)
    console.log(thingsElements)
    
    return (
        <div className='d-flex flex-column align-items-center w-100 bg-white'>
            <button onClick={addItem} className='my-5'>Add Item</button>
            {thingsElements}
        </div>
    )
}