import React from 'react';
import Card from './Card';
import ArticleList from './List';
import './css/Card.css';

const Article = () => {
  const articles = ArticleList.slice(0, 3); 
  return (
    <div className='section'>
      <h2 className='section-title'>Featured Articles</h2>
      <div className='row'>
        {articles.map((item, index) => (
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
        <button className='see-more-button'>See all articles</button>
      </div>
    </div>
  );
};

export default Article; 