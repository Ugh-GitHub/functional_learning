import {
    useQuery,
    gql
  } from "@apollo/client";
import React, { useEffect, useState } from 'react';

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

function GithubData() {
    const { loading, error, data } = useQuery(GITHUB_DATA);
    if (loading) return loading;
    if (error) return error;
    return data.user.contributionsCollection.contributionCalendar.weeks;
}

export default GithubData;