import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Body from '../Body/Body';
import Cat from '../Cat/Cat';
import Dog from '../Dog/Dog'

function App() {
  return (
    
      <div className="App">
        <Routes>
          <Route path='/' element={<Body/>}/>
          <Route path='/invoice' element={<Cat/>}>
            <Route
              index
              element={
                <main style={{ padding: '1rem' }}>
                  <p>Select a dog</p>
                </main>
              }
            />
            <Route path=':invoiceId' element={<Dog/>}/>
          </Route>
        </Routes>
      </div>
    
  );
}

export default App;
