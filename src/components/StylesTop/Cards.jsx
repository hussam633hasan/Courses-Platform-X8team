import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({ image, title }) => {
  return (
    <div className="col-12 col-md-4 mb-4">
      <div className="card cc">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
