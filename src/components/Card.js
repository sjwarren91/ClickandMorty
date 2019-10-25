import React from "react";
import "./Card.css";

function Card(props) {
    console.log(props);

    return (
        <div className="card" style={{backgroundImage: 'url(' + props.image + ')'}} onClick={() => {props.clickHandler(props.id)}} />
    );
}

export default Card
