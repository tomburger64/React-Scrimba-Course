import React from 'react';

// css
import './style/boxes-ex.css';

export default function Box(props){

    return(
        <>
        {/* indirectly passing the toggle func as an anon arrow function
         * this allows to pass the id prop as an argument
         * as it gets rendered inside the parent component with the correct id
         * (key doesn't work because it's a unique kind of prop, hence the id prop)
         * 
         * specifically concerning the ano arrowfunction,
         * it's because of the way js runs (according to chatgpt)
         * 
         * basically unless I fall for it another 100 times more
         * I'll need to ask AI why it doesn't work
         * or else I'll just get a headache jackpot
         */}
            <button 
            className='box' 
            style={{background: props.on ? "#222" : "transparent"}} 
            onClick={()=>props.toggle(props.id)} ></button>
        </>
    );
};
