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

// exercise "break" (still inside the course)
// https://v2.scrimba.com/learn-react-c0e/~029
let thingsArray = ["Thing 1", "Thing 2"]
const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
function addThing(){thingsArray.push("Thing " + (thingsArray.length + 1))}
console.log(thingsArray)
addThing()
console.log(thingsArray)
addThing()
console.log(thingsArray)
addThing()

export default function MemeGen(){
    return(
        <div className='form-bg w-100'>
            <form action="" className='form d-flex flex-column p-5 gap-5'>
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