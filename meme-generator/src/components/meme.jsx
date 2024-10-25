import React from 'react';
// to import states, either import React ↑, or import while destructuring:
// import {useState} from "react";

import './style/meme.css';

import memesData from '../fakeApiData';

export default function MemeGen(){

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

    // other exercise (introduction to states)
    // https://v2.scrimba.com/learn-react-c0e/~02b
    /*
    Challenge: complete the function below
    Given a name, return "Good <timeOfDay>, <name>!" depending
    on the current time of day.

    4 am - 11:59 am, timeOfDay = "morning"
    12 pm - 4:59 pm: timeOfDay = "afternoon"
    5 pm - 7:59 pm: timeOfDay = "evening"
    8 pm - 3:59 am: timeOfDay = "night"

    E.g. if it's currently 1 pm, greeting("Jane") ==> "Good afternoon, Jane!"

    Hint: you can get the current time of day by using: 

    const date = new Date()
    const hours = date.getHours()
    */
    // const date = new Date();
    // const hours = date.getHours();

    // function greeting(name) {
    //     let timeOfDay;

    //     if (hours >= 4 && hours <= 11){
    //         timeOfDay = "morning";
    //     }
    //     else if (hours >= 12 && hours <= 16){
    //         timeOfDay = "afternoon";
    //     }
    //     else if (hours >= 17 && hours <= 19
    //     ){
    //         timeOfDay = "evening";
    //     }
    //     else if (hours >= 20 && hours <= 3.9){
    //         timeOfDay = "night";
    //     }
    //     console.log(`Good ${timeOfDay}, ${name}`);
    // };
    // greeting("Bob");
    // - - - - -

    let randomMeme;
    function randomMemes(){
        const urls = memesData.data.memes.map(meme => meme);
        // get all the urls

        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        };
        // get a random int

        let randomInt = getRandomInt(urls.length);
        return randomMeme = urls[randomInt].url;
        // calling random url using the random int as index
    };

    function testLog(){
        console.log(randomMemes())
        console.log(randomMeme)
        console.log(memeImg)
    }

    // meme img state
    const [memeImg, setMemeImg] = React.useState('');
    function getUrl(){
        setMemeImg(randomMemes());
    };

    return(
        <div className='form-bg w-100'>
            <form action="" className='form d-flex flex-column p-5 gap-5'>
                {/* <button onClick={addItem}>Click to add thing</button>
                {thingsElements} */}
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
                <button className='d-flex justify-content-center align-items-center p-3' onClick={testLog} type='button'>Do a test log</button>
            </form>
            <img src={randomMeme} alt="" />
        </div>
    )
}