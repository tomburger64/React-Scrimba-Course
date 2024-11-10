import React from 'react';

// css
import './style/boxes-ex.css';

export default function Box(props){

    return(
        <>
        {/* indirectly passing the toggle func as an anon arrow function
         * this allows to pass the id prop as a parameter
         * as it gets rendered inside the parent component with the correct id
         * (key doesn't work because it's a unique kind of prop, hence the id prop)
         */}
            <button 
            className='box' 
            style={{background: props.on ? "#222" : "transparent"}} 
            onClick={()=>props.toggle(props.id)} ></button>
        </>
    );
};
