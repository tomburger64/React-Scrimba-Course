// states
import React from 'react';

// css
import './style/ternary-exs.css';

export default function TernaryExs(){
    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the div.state--value flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */

    const [isGoingOut, setIsGoingOut] = React.useState(true);

    function setAnswer(e){
        e.preventDefault();

        setIsGoingOut(prevState => {
            prevState = !prevState;
            prevState = !prevState;
            return prevState
        });
    };
    

    return(
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value" onClick={setAnswer}>
                <h1 className='text-center'>{isGoingOut ? "Yes" : "No"}</h1>
                {/* clicking just inverts the answer */}
            </div>
        </div>
    )
}