import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import './css/SearchBar.css';

function SearchBar() {
  return (
    <div className='searchbar'>
      <div className='form_name'>DEV@Deakin</div>
      <div className='form_search'>
        <input className='search' type='text' placeholder='Search..' />
        <button className='icon'>
          <AiOutlineSearch size={30} />
        </button>
      </div>
      <button className='button'>Post</button>
      <button className='button'>Login</button>
    </div>
  );
}

export default SearchBar; 
