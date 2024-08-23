import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Select from './Selector';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <body>
    <div className='form'>
      <div className='form_item'>New Post</div>
    </div>
    <Select />
  </body>
);