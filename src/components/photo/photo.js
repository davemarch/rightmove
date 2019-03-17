import React from "react";
import './photo.css';


const Photo = (props) => {
// console.log(props.house1);
        return (
          <div className="photo">
          <img src={props.info}/>
          </div>
        );
      }


export default Photo;