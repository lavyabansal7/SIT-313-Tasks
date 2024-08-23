import React, { useState } from 'react';
import './css/Selector.css';
function Article() {
  const [form, setForm] = useState({
    Title: '',
    Abstract: '',
    Article: '',
    Tags: '',
  });

  const onChange = (e) => {
    const { value, name } = e.target;

    setForm((state) => ({
      ...state,
      [name]: value,
    }));
  };
  return (
    <div>
      <div className='title'>
        Title
        <input
          type='text'
          onChange={onChange}
          className='input'
          name='Title'
          value={form.Title}
          placeholder='Enter a descriptive title'
        />
      </div>
      <div className='title'>Abstract</div>
      <textarea
        onChange={onChange}
        className='abstract'
        name='Abstract'
        value={form.Abstract}
        placeholder='Enter a 1-paragraph abstract'
        type='text'
      />
      <div className='title'>Article Text</div>
      <textarea
        onChange={onChange}
        className='article'
        name='Article'
        value={form.Article}
        placeholder='Enter a 1-paragraph abstract'
        type='text'
      />
      <div className='title'>
        Tags
        <input
          onChange={onChange}
          className='input'
          name='Tags'
          value={form.Tags}
          type='text'
          placeholder='Please add up to 3 tags to describe what your question is about e.g., Java'
        />
      </div>
      <button className='pl'>Post</button>
    </div>
  );
}
export default Article;
