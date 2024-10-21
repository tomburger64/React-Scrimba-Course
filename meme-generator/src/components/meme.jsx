import './style/meme.css';

export default function MemeGen(){

    // I should use states but haven't seen it in the course yet so I won't use them
    // thought about having a variable that awaits for the function to be run and then replacing its value from ' "" ' to the meme url
    
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

                <button className='d-flex justify-content-center align-items-center p-3'>Get a new meme</button>
            </form>
        </div>
    )
}