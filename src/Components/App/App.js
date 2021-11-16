import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Body from '../Body/Body';
import Cat from '../Cat/Cat';

function App() {
  return (
    
      <div className="App">
        <Routes>
          <Route path='/' element={<Body/>}/>
          <Route path='/cat' element={<Cat/>}/>
        </Routes>
      </div>
    
  );
}

export default App;
