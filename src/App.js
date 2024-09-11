import React from 'react';
import Home from './Pages/Home/Home.js';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login.js';
import Player from './Pages/Player/Player.js';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/login' element={ <Login/>}/>
        <Route path='/Player' element={<Player/>}/>
         {/*http://localhost:3000/player?/3 found it this url at the local host, in order for this to work add ? after Player,
         this line of code is replace by that of line 13 <Route path='player:id' element={<Player/>}/> */}
      </Routes>
    </div>
  )
}
export default App;
