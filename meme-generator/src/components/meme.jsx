import React from 'react';
// to import states, either import React ↑, or import while destructuring:
// import {useState} from "react";

import './style/meme.css';

import memesData from '../fakeApiData';



export default function MemeGen(){

    // reminder to self (considering how my code was before I had to "cheat"):
    // use the state directly, not through some variable that's indirectly linked to the state unless you want a headache
    // - tom

    /**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg" ← not doing that cuz it works
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */
    
    // using object to hold captions and meme url
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    // meme img state
    // apparently leaving an empty string gives an error (I don't see it anywhere though, so I'll leave it)
    const [memeImg, setMemeImg] = React.useState('');

    // returns random url from the api data
    function randomMemes(){
        // get all the urls
        const urls = allMemeImages.data.memes.map(meme => meme.url);

        // get random int
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        };
        // max length is data length
        let randomInt = getRandomInt(urls.length);

        // return random meme img url
        return urls[randomInt];
    };

    // log stuff to check if it's all ok
    function testLog(){
        console.log(randomMemes())
        console.log(meme.randomImage)
    }


    function getNewMeme(e){
        e.preventDefault() // prevent page reload

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: randomMemes()
        })) // call random meme img url function as state value
    }

    return(
        <div className='form-bg w-100'>
            <form action="" className='form d-flex flex-column p-5 gap-5'>
                {/* <p>{memeImg}</p> */} {/* Use memeImg state instead of randomMeme */}
                <div className="d-flex justify-content-between">
                    <label htmlFor="">Top caption
                        <input className="p-3 text-uppercase" type="text" placeholder='MFW (my face when)' />
                    </label>
                    
                    <label htmlFor="">Bottom caption
                        <input className="p-3 text-uppercase" type="text" placeholder='Ultrakill speedrun' />
                    </label>        
                </div>
                <button 
                    className='d-flex justify-content-center align-items-center p-3' 
                    onClick={getNewMeme} 
                    type='button'>
                    Get a new meme
                </button>
                <button 
                    className='d-flex justify-content-center align-items-center p-3' 
                    onClick={testLog} 
                    type='button'>
                    Do a test log
                </button>
            </form>
            <img src={meme.randomImage} alt="" className='px-5 py-5 w-100' />
        </div>
    )
}