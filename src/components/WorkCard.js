import React from 'react';
import "./WorkCardStyles.css";

const WorkCard = (props) => {
  return (
    <div className="product-card">
      <img src={props.imgsrc} alt={props.title} />
      <h2 className="product-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default WorkCard;
