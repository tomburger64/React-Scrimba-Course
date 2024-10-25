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



    // reminder to self (considering how my code was before I had to "cheat"):
    // use the state directly, not sopme variable that's indirectly linked to the state unless you want a headache
    // - tom



    // meme img state
    const [memeImg, setMemeImg] = React.useState('');

    // returns random url from the api data
    function randomMemes(){
        // get all the urls
        const urls = memesData.data.memes.map(meme => meme.url);

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
        console.log(memeImg)
    }


    function getNewMeme(e){
        e.preventDefault()  // prevent page reload
        setMemeImg(randomMemes())  // call random meme img url function as state
    }

    return(
        <div className='form-bg w-100'>
            <form action="" className='form d-flex flex-column p-5 gap-5'>
                <p>{memeImg}</p>  {/* Use memeImg state instead of randomMeme */}
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
            <img src={memeImg} alt="" className='px-5 w-100' />  {/* Use memeImg state instead of randomMeme */}
        </div>
    )
}