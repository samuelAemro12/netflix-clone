import React, { useState} from 'react';
import './Login.css';
import netflixLogo from '../../files/netflixLogo.png';

const Login = () => {
  const [signedIn, setSignedIn] = useState("Sign In");
  const signState = () =>{setSignedIn("Sign Up");}
  const signStates = () =>{setSignedIn("Sign In");}

  return (
    <div className='login'>
      <img src={netflixLogo} alt='netflix logo' className='netflixLogoImage'/>
      <div className='form-body'>
        <h1>{signedIn}</h1>
        <form>
          {signedIn === "Sign Up" ? <input type='text' placeholder='your name'/> : <> </>}          
          <input type='email' placeholder='Email'/>
          <input type='password' placeholder='Password'/>
          <button>{signedIn}</button>
          <div className='form-help'>
            <div className='save-remember-me'>
              <input type='checkbox'/>
              <label htmlFor=''>Remember Me</label>
            </div>
            <p>HElP?</p>
          </div>
        </form>
        <div className='switch-state'>
          {signedIn === "Sign In"?
            <p>New to Netflix?<span onClick={signState}>Sign Up Now</span></p>
            :<p>Already have account <span onClick={signStates}>Sign In Now</span></p>}
        </div>
      </div>
    </div>
  );
}

export default Login;