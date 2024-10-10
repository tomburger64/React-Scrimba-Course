import React from "react";
import ReactDOM from "react-dom/client";

//components
import Header from "./components/Header.js"; //static
import StaticOne from "./components/StaticOne.js"; //hero (static)
import Card from "./components/Card.js";

//cards data
import Data from './data/data.js';

export default function App() {

  const cardData = Data.map((item) => {
    return <Card 
    key={item.id}
    {...item}
    />
  })

  return (
    <>
      {/* I know passing imgs as props for such static comps isn't optimal but I couldn't use images in non-static comps if I didn't move the image folder into the public folder */}
      <Header 
      logoImg="airbnb-logo.png"
      />

      <StaticOne
      gridImg="image-grid.png"
      />

      <div className="card-container d-flex gap-5 px-5 bg-white">
        
        {cardData}

      </div>

    </>
  );
}
