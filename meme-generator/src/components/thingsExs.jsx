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
     * Challenge: Convert the code below to use an array
     * held in state instead of a local variable. Initialize 
     * the state array with the same 2 items below
     * 
     * Don't worry about fixing `addItem` quite yet.
     */
    const thingsArray = ["Thing 1", "Thing 2"]
    
    function addItem() {
        // We'll work on this next
        // const newThingText = `Thing ${thingsArray.length + 1}`
        // thingsArray.push(newThingText)
        // document.getElementById()
        // console.log(thingsArray)
    }
    
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}