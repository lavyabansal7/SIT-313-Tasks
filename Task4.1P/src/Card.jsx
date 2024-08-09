import React from 'react';
import './css/Card.css';
import { AiFillStar } from 'react-icons/ai';

const Card = ({ image, name, description, star, author }) => {
  return (
    <div className='column'>
      <img className='card-image' src={image} alt={name} />
      <h3>{name}</h3>
      <p className='description'>{description}</p>
      <div className='rating'>
        <AiFillStar size={20} color={'yellow'} />
        <span>{star}</span>
        <span className='author_name'>{author}</span>
      </div>
    </div>
  );
};

export default Card; 
