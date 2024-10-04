import React from 'react';
import './End.css';
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from 'react-icons/ai';

function Footer() {
  return (
    <div className='footer'>
      <div className='end_form'>
        <div className='end_form_item'>
          <h1>Explore</h1>
          <p>Home</p>
          <p>Questions</p>
          <p>Articles</p>
          <p>Tutorials</p>
        </div>
        <div className='end_form_item'>
          <h1>Support</h1>
          <p>FAQs</p>
          <p>Help</p>
          <p>Contact Us</p>
        </div>
        <div className='end_form_item'>
          <h1>Stay connected</h1>
          <div className='form_icon'>
            <AiFillFacebook size={30} />
            <AiFillTwitterSquare size={30} />
            <AiFillInstagram size={30} />
          </div>
        </div>
      </div>
      <div className='end_form_2'>
        <h1 className='deakin'>DEV@Deakin 2024</h1>
        <div className='end_form_3'>
          <p>Privacy Policy</p>
          <p>Terms</p>
          <p>Code of Conduct</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;  