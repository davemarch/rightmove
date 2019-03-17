import React from "react";
import Contact from "../contact/contact.js"
import './description.css';



const Description = (props) => {
        return (
          <div className="description">
          <p>{props.heading}</p>
          <p>{props.location}</p>
          <p>{props.description}</p>
          <p>{props.added}</p>
          <Contact />
          </div>
        );
      }


export default Description;