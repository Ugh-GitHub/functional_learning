import React from 'react';
// import logo from '../../logo.svg';
// import { Counter } from '../counter/Counter';
import '../App/App.css';
import { NavLink } from 'react-router-dom';

function Body() {
  return (
    
    <div className="Body">
        <NavLink to='/cat'>
        <h1>Hello World</h1>
        </NavLink>
    </div>
    
  );
}

export default Body;

//      <header className="App-header">
//             <img src={logo} className="App-logo" alt="logo" />
//             <Counter />
//             <p>
//             Edit <code>src/App.js</code> and save to reload.
//             </p>
//             <span>
//             <span>Learn </span>
//             <a
//                 className="App-link"
//                 href="https://reactjs.org/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//             >
//                 React
//             </a>
//             <span>, </span>
//             <a
//                 className="App-link"
//                 href="https://redux.js.org/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//             >
//                 Redux
//             </a>
//             <span>, </span>
//             <a
//                 className="App-link"
//                 href="https://redux-toolkit.js.org/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//             >
//                 Redux Toolkit
//             </a>
//             ,<span> and </span>
//             <a
//                 className="App-link"
//                 href="https://react-redux.js.org/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//             >
//                 React Redux
//             </a>
//             </span>
//       </header>