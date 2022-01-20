import React, { useState } from 'react';
import GithubColumn from '../GithubColumn/GithubColumn';
import './GithubData.css';

export default function GithubData() {
  const [contributionTotal, setContributionTotal] = useState('');

  return (
    <div className='githubComponent'>
      <a href="https://github.com/Ugh-GitHub" style={{color:'black'}} title="Click to visit my Github Profile">
        <h3><img src="/images/GitHub-Mark-64px.png" className="githubIcon" alt="GitHub Logo"></img>&nbsp;&nbsp;Github Contributions (Click to visit)</h3>
      </a>
        <GithubColumn/>
        <p className="footnote">Hover for specfic commit information.&nbsp;
          <a href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile">
             Learn more about how contributions are counted for Github.
          </a>
        </p>
    </div>
  );
}