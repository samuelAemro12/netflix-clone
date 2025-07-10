import React, { useEffect } from 'react';
import Home from './Pages/Home/Home.js';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './Pages/Login/Login.js';
import Player from './Pages/Player/Player.js';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase.js';

const App = () => {
  const navigation = useNavigate();
  useEffect(()=>{
    onAuthStateChanged(auth, async(user)=>{
        if(user){
          console.log("logged in");
          navigation('/');
        }else{
          console.log("logged out");
          navigation('/login');
        }
    })
  },[])
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/login' element={ <Login/>}/>
        <Route path='/player/:id' element={<Player/>}/>
      </Routes>
    </div>
  )
}
export default App;
