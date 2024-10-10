import React from 'react';
import ReactDOM from 'react-dom/client';

// css
import './style/section-one.css';

export default function SectionOne(){
    return(
        <section className='section-one d-flex align-items-center justify-content-center'>
            <span className='text-center'>Do you like the font I chose ?<br />It's called "<a href="https://fonts.google.com/specimen/Oxygen" target='_blank'>Oxygen</a>" on Google fonts !</span>

            <div className='section-one-img-cont w-50'></div>
        </section>
    )
}