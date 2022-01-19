import * as React from 'react';
import ReactDOM from 'react-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import './index.css';
import App from './Components/App/App';
// import { store } from './Components/counter/store';
// import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'; 
import Expenses from './Components/Expenses/Expenses';
import Portfolio from './Components/Portfolio/Portfolio';
// import Invoice from './Components/InvoiceItem/InvoiceItem';
// import Test from './Components/VideoInterview/VideoInterview';
import Resume from './Components/Resume/Resume';
import Home from './Components/Home/Home';
// import GithubData from './Components/GithubData/GithubData';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.REACT_APP_GITHUB_CONTRIBUTIONS_READ_TOKEN}`,
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      {/* <React.StrictMode>
        <Provider store={store}> */}
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />}/>
            {/* <Route path="interviews" element={<Test />}/> */}
            <Route path="resume" element={<Resume />} />
            <Route path="projects" element={<Expenses />} />
            <Route path="portfolio" element={<Portfolio />}>
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
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
