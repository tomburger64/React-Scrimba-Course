import Reac from 'react';
import ReactDOM from 'react-dom/client';

//css
import './style/card.css';

//current image situation :

/* <img src={`../images/airbnb-logo.png`} /> */ /* direct link as the source works */

/* import Test from '/DEV_PROJECTS/airbnb-clone-page/airbnb-clone/public/images/swimmer.png';
+
<img src={Test} /> */ /* doesn't work because react doesn't like when anything's imported from outside the src folder */

// TLDR: react doesn't like when you import stuff from outside of the src folder, apparently doing "eject" could work but could also bring trouble while dev'ing further. Using external sources instead (still passing them as props).

//I understand how it's supposed to work "normally" despite this

export default function Card(props){

    //shows card's state tag if openSpots === 0, and "Online" if location is "Online"ù
    let tagText
    if (props.openSpots === 0){ //if 0 open spots, tagText = "sold out" 
        tagText = 'Sold out'
    } else if (props.location === "Online"){ //if NOT 0 openspots and location is online, tagText = "Online"
        tagText = "Online"
    } //if not online either, tagText = undefined (no display)


    return(
        <div className='card'>

            <div className='card-visual d-flex justify-content-center'> {/* image and tag */}

                {tagText && <div className='tag text-uppercase'>{tagText}</div>} {/* renders the "sold out" tag only if there are no more openSpots */}

                <div>
                    <img src={`${props.coverImg}`} />

                </div>

            </div>

            <br />

            <div className='card-meta d-flex flex-column gap-3'>

                <div className='card-rating d-flex align-items-center'>
                    <img src="" className='card-star'></img>
                    <span className='rating-value'>{props.rating} &nbsp;</span>
                    <span className='rating-amount'>&nbsp;({props.stats.reviewCount})</span>
                    <span className='countr'>&nbsp;{props.location}</span>
                </div>

                <div className='card-info d-flex flex-column'>
                    <span className='card-title'>
                        {props.title}
                    </span>

                    <span className='card-cost'><span>{props.price}€</span> / person</span>
                </div>

            </div>
            
        </div>
    )
};