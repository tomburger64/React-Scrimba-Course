import React from 'react';

import './style/business-card-star-icon.css'

    /**
     * Challenge: Move the star image into its own component (Star) X
     * - It should receive a prop called `isFilled` that it
     *   uses to determine which icon it will display X
     * - Import and render that component, passing the value of
     *   `isFavorite` to the new `isFilled` prop. X
     * - Don't worry about the abiliity to flip this value quite yet.
     *   Instead, you can test if it's working by manually changing
     *   `isFavorite` in state above. X
     */

    // dealt with props in a different way that the guy in the vid did, my way seems simpler
    // props imported: src (staricon) & isFavorite (state object isfavortie bool value)
export default function Star(props){
    
    /**
     * Challenge:
     * If the star is filled, add an aria-label of "Unmark as favorite".
     * Otherwise, use the aria-label of "Mark as favorite".
     */
    // works but need to open devtools to see it work

    return(
        <button className='star-icon'
            onClick={props.handleClick}
            aria-label={props.isFavorite ? 'Unmark as favorite' : 'Mark as favorite'}
            aria-pressed={props.isFavorite}
        >
            <img 
                src={props.src}
                className="card--favorite"
                alt="favorite icon"
            />
        </button>
    )
}