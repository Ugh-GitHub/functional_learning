import {
    useQuery,
    gql
  } from "@apollo/client";
  import './GithubColumn.css';
  import GithubRow from '../GithubRow/GithubRow';
  import { useCallback, useEffect, useState } from "react";
  
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
  
  
    return (
        <div>
            {JSON.stringify(data.user.contributionsCollection.contributionCalendar.weeks)}
        </div>
    );
  }
  
  export default GithubColumn;

//   
// 
// 
// 
  
  import {
    useQuery,
    gql
  } from "@apollo/client";
  import './GithubColumn.css';
  import GithubRow from '../GithubRow/GithubRow';
  import { useCallback, useEffect, useState } from "react";
  
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
  
  
    return data.user.contributionsCollection.contributionCalendar.weeks.map((week, index) => (
      <div className="contributionsColumn" key={week.firstDay}>
        <GithubRow week={week.contributionDays} weekIndex={index}/>
      </div>
    ));
  }
  
  export default GithubColumn;