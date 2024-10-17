import './style/meme.css';

export default function Meme(){
    return(
        <div className='form-bg w-100'>
            <form action="" className='form d-flex flex-column p-5 gap-5'>
                <div className="d-flex justify-content-between">
                    <input className="p-3" type="text" placeholder='Top line' />

                    <input className="p-3" type="text" placeholder='Bottom line'/>
                </div>

                <button className='d-flex justify-content-center align-items-center'><p className='p-3'>Get a new meme</p></button>
            </form>
        </div>
    )
}