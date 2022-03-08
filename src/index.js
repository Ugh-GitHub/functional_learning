import React from 'react';
import ReactDOM from 'react-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  // gql
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import './index.css';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'; 
import Portfolio from './Components/Portfolio/Portfolio';
import Resume from './Components/Resume/Resume';
import Home from './Components/Home/Home';
// import VideoInterview from './Components/VideoInterview/VideoInterview';


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

// client
//   .query({
//     query: gql`query {
//       user(login: "ugh-github") {
//         name
//         contributionsCollection {
//           contributionCalendar {
//             colors
//             totalContributions
//             weeks {
//               contributionDays {
//                 color
//                 contributionCount
//                 date
//                 weekday
//               }
//               firstDay
//             }
//           }
//         }
//       }
//     }`
//   })
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      {/* <React.StrictMode>
        <Provider store={store}> */}
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />}/>
            {/* <Route path="interviews" element={<VideoInterview />}/> */}
            {/* Need to fix CSS if going to include VideoInterview */}
            <Route path="resume" element={<Resume />} />
            <Route path="portfolio" element={<Portfolio />} />
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
