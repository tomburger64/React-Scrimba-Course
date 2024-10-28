import React from "react";

import './style/contact-card-exs.css';

export default function ContactCard() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    });
    
    /**
     * Challenge: Use a ternary to determine which star image filename
     * should be used based on the `contact.isFavorite` property
     * 
     * this should've been local imgs but I'm lazy ↓
     * `true` => "https://cdn-icons-png.flaticon.com/512/541/541415.png"
     * `false` => "https://cdn-icons-png.flaticon.com/512/13/13595.png"
     * 
     * Then use the starIcon value to display the correct image
     */

    const filledStar = "https://cdn-icons-png.flaticon.com/512/541/541415.png";
    const emptyStar = "https://cdn-icons-png.flaticon.com/512/13/13595.png";
    let starIcon = contact.isFavorite ? filledStar : emptyStar;
    
    function toggleFavorite() {
        console.log("Toggle Favorite");

        // had to cheat to be reminded that when you deal with an object, you call the '{}' to directly mess with it
        setContact(prevContact => {
            return {...prevContact,
                isFavorite: !prevContact.isFavorite
            };
        });

        console.log(contact.isFavorite);
    };

    return (
        <main>
            <article className="card">
                <img src="https://picsum.photos/200" className="card--image" />
                <div className="card--info">
                    <img 
                        src={starIcon}
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}
