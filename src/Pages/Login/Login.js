import React from 'react';
import './Login.css';
import netflixLogo from '../../files/netflixLogo.png';

const Login = () => {
  return (
    <div className='login'>
      <img src={netflixLogo} alt='' className='netflixLogoImage'/>
      <div className=''>
        <h1>Sign Up</h1>
        <form>
          <input type='text' placeholder='your name'/>
          <input type='email' placeholder='Email'/>
          <input type='password' placeholder='Password'/>
          <button>Sign Up</button>
          <div className='form-help'>
            <div className=''>
              <input type='checkbox'/>
              <label htmlFor=''>Remember Me</label>
            </div>
            <p>HElP?</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
