import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

function ExchangeRates() {

  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
}

export default ExchangeRates;



// async function getContributions(token, username) {
//   const headers = {
//       'Authorization': `bearer ${token}`,
//   }
//   const body = {
//       "query": `query {
//           user(login: "${username}") {
//             name
//             contributionsCollection {
//               contributionCalendar {
//                 colors
//                 totalContributions
//                 weeks {
//                   contributionDays {
//                     color
//                     contributionCount
//                     date
//                     weekday
//                   }
//                   firstDay
//                 }
//               }
//             }
//           }
//         }`
//   }
//   const response = await fetch('https://api.github.com/graphql', { method: 'POST', body: JSON.stringify(body), headers: headers });
//   const data = await response.json();
//   return data;
// }

// const githubData = (async () => {
//   const data = await getContributions(process.env.REACT_APP_GITHUB_CONTRIBUTIONS_READ_TOKEN, 'ugh-github');
//   const contributions = data.data.user.contributionsCollection.contributionCalendar;
//   console.log(contributions);
//   return contributions;
// })();

// export default githubData;
