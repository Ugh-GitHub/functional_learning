import './GithubColumn.css';
import GithubRow from '../GithubRow/GithubRow';

// const GITHUB_DATA = gql`query {
//   user(login: "ugh-github") {
//     name
//     contributionsCollection {
//       contributionCalendar {
//         colors
//         totalContributions
//         weeks {
//           contributionDays {
//             color
//             contributionCount
//             date
//             weekday
//           }
//           firstDay
//         }
//       }
//     }
//   }
// }`;

function GithubColumn({githubData, isMobile, mobileWeekTotal}) {

  

  if ( isMobile ) {
    return (
      <div >
        {githubData.user.contributionsCollection.contributionCalendar.weeks.slice(52 - mobileWeekTotal,53).map((week, index) => (
          <div className="contributionsColumn" key={week.firstDay}>
            <GithubRow week={week.contributionDays} weekIndex={index}/>
          </div>))
        }
      </div>
    );
  }
  else {
    return (
      <div>
        {githubData.user.contributionsCollection.contributionCalendar.weeks.map((week, index) => (
          <div className="contributionsColumn" key={week.firstDay}>
            <GithubRow week={week.contributionDays} weekIndex={index}/>
          </div>))
        }
      </div>
    );
  }
}

export default GithubColumn;