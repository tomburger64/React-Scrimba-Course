import React from "react";
import ReactDOM from "react-dom/client";

export default function Contact(props) {
  console.log(props);
  return (
    <div className="contact-card">
      <img src="https://picsum.photos/200/150" />
      <h3>Mr. Whiskerson</h3>
      <div className="info-group">
        <img src="./images/phone-icon.png" />
        <p>(212) 555-1234</p>
      </div>
      <div className="info-group">
        <img src="./images/mail-icon.png" />
        <p>mr.whiskaz@catnap.meow</p>
      </div>
    </div>
  );
}


