import React, { useState} from 'react';
import './Login.css';
import netflixLogo from '../../files/netflixLogo.png';
import { login, signup } from '../../firebase';

const Login = () => {
  const [signedIn, setSignedIn] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const signState = () =>{setSignedIn("Sign Up");}
  const signStates = () =>{setSignedIn("Sign In");}

  const user_auth = async (event)=>{
    event.preventDefault();
    if(signState === "Sign In"){
      await login(email, password);
    }else{
      await signup(name, email, password);
    }
  }

  return (
    <div className='login'>
      <img src={netflixLogo} alt='netflix logo' className='netflixLogoImage'/>
      <div className='form-body'>
        <h1>{signedIn}</h1>
        <form>
          {signedIn === "Sign Up" ? <input type='text'value={name} onChange={(e)=>{setName(e.target.value) }}
           placeholder='Name'/> : <> </>}          
          <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value) }} placeholder='Email'/>
          <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/>
          <button onClick={user_auth} type='submit'>{signedIn}</button>
          <div className='form-help'>
            <div className='save-remember-me'>
              <input type='checkbox'/>
              <label>Remember Me</label>
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