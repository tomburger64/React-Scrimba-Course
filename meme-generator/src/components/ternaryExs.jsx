// what was done before I made this file:

// quick ternary exercise (from the course)
    // export default function App() {
    //     /**
    //      * Challenge: Replace the if/else below with a ternary
    //      * to determine the text that should display on the page
    //      */
    //     const isGoingOut = false
    // 
    //     function answer(){
    //         return isGoingOut ? "Yes" : "No" // Use ternary here
    //     }
    // 
    //     return (
    //         <div className="state">
    //             <h1 className="state--title">Do I feel like going out tonight?</h1>
    //             <div className="state--value">
    //                 <h1>{answer()}</h1> {/* add '()' for the func to run automatically*/}
    //             </div>
    //         </div>
    //     )
    // }
    // 
    // works but the course's solution is better:
    // let answer = isGoingOut ? "Yes" : "No" (also don't add '()' when calling the js in the jsx)
    // 
    // 
    // 
    // second exercise for ternary op (put the ternary directly in the js call)
    // const isGoingOut = true
    // let answer
    // 
    // return (
    //     <div className="state">
    //         <h1 className="state--title">Do I feel like going out tonight?</h1>
    //         <div className="state--value">
    //             <h1>{answer = isGoingOut ? "Yes" : "No"}</h1>
    //         </div>
    //     </div>
    // )
    // 
    // again, works but solution is better (directly taking the var's value):
    // const isGoingOut = true
    // 
    // return (
    //     <div className="state">
    //         <h1 className="state--title">Do I feel like going out tonight?</h1>
    //         <div className="state--value">
    //             <h1>{isGoingOut ? "Yes" : "No"}</h1>
    //         </div>
    //     </div>
    // )
    // 
    // 
    // 
    // okay now it's a from scratch exercise (pretty sure it's the same thing but I gotta do it from zero) so I'll make a new component
    // 
    
    // - - - - -

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
            // prevState = !prevState;
            // thought you'd have to flip it twice so that it doesn't change the answer but apparently the exercise just wants the value to flip on click so here
            // it does make more sense than flipping it twice for no reason, lol (oops)

            return prevState
        });
    };
    

    return(
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value" onClick={setAnswer}>
                <button className='text-center p-5 rounded-circle'>{isGoingOut ? "Yes" : "No"}</button>
                {/* clicking just inverts the answer */}
            </div>
        </div>
    )
}