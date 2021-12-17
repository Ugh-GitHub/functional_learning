import React from 'react';
import ReactDOM from 'react-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './index.css';
import App from './Components/App/App';
// import { store } from './Components/counter/store';
// import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'; 
import Expenses from './Components/Expenses/Expenses';
import Invoices from './Components/Invoices/Invoices';
import Invoice from './Components/InvoiceItem/InvoiceItem';
import Test from './Components/VideoInterview/VideoInterview';
import Resume from './Components/Resume/Resume';
import Home from './Components/Home/Home';

ReactDOM.render(
  <Router>
    {/* <React.StrictMode>
      <Provider store={store}> */}
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />}/>
          <Route path="interviews" element={<Test />}/>
          <Route path="resume" element={<Resume />} />
          <Route path="projects" element={<Expenses />} />
          <Route path="portfolio" element={<Invoices />}>
            {/* Default on page load */}
            <Route
              index
              element={
                <main style={{ padding: '1rem' }}>
                  <p>Select an invoice</p>
                </main>
              }
            />
            {/*  */}
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
    </Routes>
      {/* </Provider>
    </React.StrictMode> */}
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
