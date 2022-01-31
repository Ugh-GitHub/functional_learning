import {
  useQuery,
  gql
} from "@apollo/client";
import React from 'react';
import GithubColumn from '../GithubColumn/GithubColumn';
import './GithubData.css';

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

export default function GithubData() {
  
  var isMobile = Math.min(window.screen.width, window.screen.height) < 768 || navigator.userAgent.indexOf("Mobi") > -1;
  const { loading, error, data } = useQuery(GITHUB_DATA);

  if ( loading ) return <p>Loading...</p>;
  if ( error ) return <p>Error :(</p>;
  let mobileWeekTotal = 12;
  
  var mobileTotalContributionsArray = data.user.contributionsCollection.contributionCalendar.weeks.slice(52 - mobileWeekTotal,52);
  let mobileContributionTotal = 0;
  

  for (const week of mobileTotalContributionsArray) {
    for (const day of week.contributionDays) {
      mobileContributionTotal+=day.contributionCount;
    }
  }

  if ( isMobile ) {
    return (
      <div id='mobileGithubContributions'>
        <a href="https://github.com/Ugh-GitHub" style={{color:'black'}} title="Click to visit my Github Profile">
          <h4>
            <img src="https://s3.us-east-2.amazonaws.com/portfolio.site.images/GitHub-Mark-64px.png" className="githubIcon" alt="GitHub Logo"></img>
            &nbsp;&nbsp;Github Contributions<br/> ({mobileWeekTotal} Week Total: {mobileContributionTotal})
          </h4>
        </a>
          <GithubColumn githubData={data} isMobile={isMobile} mobileWeekTotal={mobileWeekTotal}/>
          <p className="footnoteMobile">Tap for specfic commit information.&nbsp;
            <a href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile">
               <br/>Learn more about how contributions are counted for Github.
            </a>
          </p>
      </div>
    );
  }
  else {
    return (
      <div className='githubComponent'>
        <a href="https://github.com/Ugh-GitHub" style={{color:'black'}} title="Click to visit my Github Profile">
          <h3>
            <img src="https://s3.us-east-2.amazonaws.com/portfolio.site.images/GitHub-Mark-64px.png" className="githubIcon" alt="GitHub Logo"></img>
            &nbsp;&nbsp;Github Contributions (YTD Total: {data.user.contributionsCollection.contributionCalendar.totalContributions})
          </h3>
        </a>
          <GithubColumn githubData={data} isMobile={isMobile}/>
          <p className="footnote">Hover for specfic commit information.&nbsp;
            <a href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile">
               Learn more about how contributions are counted for Github.
            </a>
          </p>
      </div>
    );
  }
  
}