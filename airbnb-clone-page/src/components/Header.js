import React from 'react';
import ReactDOM from 'react-dom/client';

// css
import './style/header.css';

export default function Header(props){
    return(
        <div className='header d-flex align-items-center'>
            <a href="#">{/* ← I guess it's also a prop when the links differs for each card */}
                <img src={`../images/${props.logoImg}`} className='logo'></img>
            </a>
        </div>
    )
};