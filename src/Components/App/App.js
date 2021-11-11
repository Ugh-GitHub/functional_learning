import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Body from '../Body/Body';

function App() {
  return (
    
      <div className="App">
        <Routes>
          <Route path='/' element={<Body/>}/>
        </Routes>
      </div>
    
  );
}

export default App;
