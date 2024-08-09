import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

import SearchBar from './SearchBar';
import Article from './Article';
import Tutorial from './Tutorial';
import SignUp from './SignUp';
import Footer from './Footer';

ReactDOM.render(
  <React.StrictMode>
    <SearchBar />
    <div>
      <img className='image' src={'https://picsum.photos/id/36/1200/400'} alt='Featured' />
    </div>
    <Article />
    <Tutorial />
    <SignUp />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
