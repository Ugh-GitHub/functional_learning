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
  
  const { loading, error, data } = useQuery(GITHUB_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className='githubComponent'>
      <a href="https://github.com/Ugh-GitHub" style={{color:'black'}} title="Click to visit my Github Profile">
        <h3><img src="/images/GitHub-Mark-64px.png" className="githubIcon" alt="GitHub Logo"></img>&nbsp;&nbsp;Github Contributions (YTD Total: {data.user.contributionsCollection.contributionCalendar.totalContributions})</h3>
      </a>
        <GithubColumn githubData={data}/>
        <p className="footnote">Hover for specfic commit information.&nbsp;
          <a href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile">
             Learn more about how contributions are counted for Github.
          </a>
        </p>
    </div>
  );
}