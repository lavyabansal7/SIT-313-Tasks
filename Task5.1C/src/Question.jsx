import React, { useState } from 'react';
import './css/Selector.css';

function Question() {
  const [form, setForm] = useState({
    Title: '',
    Description: '',
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
          placeholder='Start your question with how, what, why, etc.'
        />
      </div>
      <div className='title'>Describe your problem</div>
      <textarea
        onChange={onChange}
        className='problem'
        name='Description'
        value={form.Description}
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
export default Question;
