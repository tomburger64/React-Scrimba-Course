import React from 'react';
import ReactDOM from 'react-dom';

//img
import smallLogo from './../images/logo192.png'

//css
import './style/header.css';

export default function Header(){
    return(
        <header className='header d-flex justify-content-between align-items-center'>

            <div className='logo-title d-flex align-items-center'>
                <img src={smallLogo}></img>
                <span>My solo React project !</span>
            </div>

            <span>1 - A simple static page</span>
            
        </header>
    )
}