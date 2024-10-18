import './style/meme.css';

export default function Meme(){
    return(
        <div className='form-bg w-100'>
            <form action="" className='form d-flex flex-column p-5 gap-5'>
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-column">
                        <label htmlFor="">Top caption</label>
                        <input className="p-3" type="text" placeholder='MFW (my face when)' />
                    </div>
                    <div className="d-flex flex-column">
                        <label htmlFor="">Bottom caption</label>
                        <input className="p-3" type="text" placeholder='Ultrakill speedruns'/>
                    </div>
                </div>

                <button className='d-flex justify-content-center align-items-center p-3'>Get a new meme</button>
            </form>
        </div>
    )
}