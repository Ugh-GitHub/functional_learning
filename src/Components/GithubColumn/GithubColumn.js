import {
  useQuery,
  gql
} from "@apollo/client";
import './GithubColumn.css';
import GithubRow from '../GithubRow/GithubRow';

const GITHUB_DATA = gql`query {
  user(login: "ugh-github") {
    name
    contributionsCollection {
      contributionCalendar {
        colors
        totalContributions
        weeks {
          contributionDays {
            color
            contributionCount
            date
            weekday
          }
          firstDay
        }
      }
    }
  }
}`;

function GithubColumn() {
  const { loading, error, data } = useQuery(GITHUB_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.user.contributionsCollection.contributionCalendar.weeks.map((week) => (
    <div className="contributionsColumn" key={week.firstDay}>
      <GithubRow week={week.contributionDays}/>
    </div>
  ));
}

export default GithubColumn;

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

// return data.user.contributionsCollection.contributionCalendar.weeks.map(({})