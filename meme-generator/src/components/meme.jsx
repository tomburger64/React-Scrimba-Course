import React from 'react';

import './style/meme.css';

import memesData from '../fakeApiData';


let randomMeme
function randomMemes(){
    const urls = memesData.data.memes.map(meme => meme);
    // get all the urls

    function getRandomInt(max) {
        return Math.floor(Math.random() * max)
    };
    // get a random int

    let randomInt = getRandomInt(urls.length);
    randomMeme = urls[randomInt]
    // calling random url using the random int as index
};

export default function MemeGen(){

    // exercise "break" (still inside the course)
    // https://v2.scrimba.com/learn-react-c0e/~029
        const [things, setThings] = React.useState(["Thing 1", "Thing 2"])
    
    function addItem() {
        const newThingText = `Thing ${things.length + 1}`
        setThings(prevState => [...prevState, newThingText]);
        event.preventDefault(); //deprecated but it's just for here and now
    }
    
    const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)
    // also added a button on top that triggers the function (will be deleted once the exercise is done)
    // - - - - -

    return(
        <div className='form-bg w-100'>
            <form action="" className='form d-flex flex-column p-5 gap-5'>
                <button onClick={addItem}>Click to add thing</button>
                {thingsElements}
                <p>{randomMeme}</p>
                <div className="d-flex justify-content-between">
                    
                    <label htmlFor="">Top caption
                        <input className="p-3 text-uppercase" type="text" placeholder='MFW (my face when)' />
                    </label>
                    
                    <label htmlFor="">Bottom caption
                        <input className="p-3 text-uppercase" type="text" placeholder='Ultrakill speedrun' />
                    </label>        
                </div>

                <button className='d-flex justify-content-center align-items-center p-3' onClick={randomMemes} type='button'>Get a new meme</button>
            </form>
        </div>
    )
}