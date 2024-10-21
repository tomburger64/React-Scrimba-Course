import './style/meme.css';

import memesData from '../fakeApiData';



function randomMemes(){
    const urls = memesData.data.memes.map(meme => meme);
    // get all the urls

    function getRandomInt(max) {
        return Math.floor(Math.random() * max)
    };
    // get a random int

    let random = getRandomInt(urls.length);
    console.log(urls[random])
    // calling random url using the random int as index
};

export default function MemeGen(){
    return(
        <div className='form-bg w-100'>
            <form action="" className='form d-flex flex-column p-5 gap-5'>
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