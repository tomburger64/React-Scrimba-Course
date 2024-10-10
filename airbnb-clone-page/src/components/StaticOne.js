import React from 'react';
import ReactDOM from 'react-dom/client';

// css
import './style/static-grid.css';

// static image grid section
export default function StaticOne(props){
    return(
        <div>
            <div className='grid w-100 d-flex justify-content-center align-items-center'>
                <img src={`./images/${props.gridImg}`}></img>
            </div>

            <div className='online-experiences'>
                <div>
                    <h2>Online Experciences</h2>
                    <span>
                        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique justo non velit vulputate, vel magna dolor tempus, vel tincidunt justo.
                    </span>
                </div>
                
            </div>

            <hr />
        </div>
        
    )
};