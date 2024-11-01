import React from 'react';

    /**
     * Challenge: Move the star image into its own component (Star) X
     * - It should receive a prop called `isFilled` that it
     *   uses to determine which icon it will display X
     * - Import and render that component, passing the value of
     *   `isFavorite` to the new `isFilled` prop. X
     * - Don't worry about the abiliity to flip this value quite yet.
     *   Instead, you can test if it's working by manually changing
     *   `isFavorite` in state above.
     */

    // props imported: src (staricon) & isFavorite (state object isfavortie bool value)
export default function Star(isFilled){
    
    return(
        <img 
            src={isFilled.src}
            className="card--favorite"
            onClick={isFilled.toggleFavorite}
        />
    )
}