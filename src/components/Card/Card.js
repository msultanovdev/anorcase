import React from "react";
import './Card.css';

const Card = ({img, title, text}) => {
    return(
        <div className="card">
            <img className="card-img" src={img} alt="img" />

            <div className="card-section">
                <h1 className="card-section-title">
                    {title}
                </h1>
                <p className="card-section-text">
                    {text}
                </p>
            </div>
        </div>
    );
}

export default Card;