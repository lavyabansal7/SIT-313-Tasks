import React from 'react';
import Card from './Card';
import ArticleList from './List';
import './css/Card.css';

const Tutorial = () => {
  const tutorials = ArticleList.slice(3, 6); 
  return (
    <div className='section'>
      <h2 className='section-title'>Featured Tutorials</h2>
      <div className='row'>
        {tutorials.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            name={item.name}
            description={item.description}
            star={item.star}
            author={item.author}
          />
        ))}
      </div>
      <div className='button-container'>
        <button className='see-more-button'>See all tutorials</button>
      </div>
    </div>
  );
};

export default Tutorial;  
