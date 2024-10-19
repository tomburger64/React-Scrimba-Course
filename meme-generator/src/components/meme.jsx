import './style/meme.css';

// imgflip api meme img
import getMeme from '../imgFlipApi';

export default function MemeGen(){
    
    return(
        <div className='form-bg w-100'>
            <form action="" className='form d-flex flex-column p-5 gap-5'>
                <div className="d-flex justify-content-between">
                    
                    <label htmlFor="">Top caption
                        <input className="p-3 text-uppercase" type="text" placeholder='MFW (my face when)' />
                    </label>
                    
                    <label htmlFor="">Top caption
                        <input className="p-3 text-uppercase" type="text" placeholder='Ultrakill speedrun' />
                    </label>        
                </div>

                <button className='d-flex justify-content-center align-items-center p-3' onMouseOver={getMeme}>Get a new meme</button>
            </form>
        </div>
    )
}