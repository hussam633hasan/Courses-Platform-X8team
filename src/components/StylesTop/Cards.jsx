import React from 'react';


const Card = ({ image, title, isSpecial }) => {
  return (
    <div className={`card ${isSpecial ? 'special-card' : ''}`}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title h5-style">{title}</h5>
      </div>
    </div>
  );
};

export default Card;
