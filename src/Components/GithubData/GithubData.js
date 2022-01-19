import * as React from 'react';
import GithubColumn from '../GithubColumn/GithubColumn';
import './GithubData.css';

export default function GithubData() {

  return (
    <div className='githubComponent'>
      <h3>Github Contributions</h3>
        <GithubColumn/>
        <p>Implemented using GraphQL and ApolloClient. Hover for specfic commit information</p>
    </div>
  );
}