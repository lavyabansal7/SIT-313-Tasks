import React from 'react';
import './css/SignUp.css';

function SignUp() {
  return (
    <form action='/' className='form' method='post'>
      <div className='form'>
        <div className='form_name'>SIGN UP FOR OUR DAILY INSIDER</div>
        <div>
          <input
            type='text'
            name='email'
            className='form_input'
            placeholder='Enter your Email'
            aria-label='Enter your Email'
          />
        </div>
        <button className='form-button' name='Subscribe' type='submit'>
          Subscribe
        </button>
      </div>
    </form>
  );
}

export default SignUp;  
