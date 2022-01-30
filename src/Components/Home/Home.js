import * as React from 'react';
import GithubData from '../GithubData/GithubData';
import './Home.css';

export default function Home() {

  

  return (
    <div className="homeFormat">
        <div className="sectionDivides">
          <img src="https://s3.us-east-2.amazonaws.com/portfolio.site.images/WordPress_Headshot.jpeg" className="headshot" alt="Peter Headshot"></img>
          <h1 className="aboutHeader">Welcome!</h1>
          <p className="aboutSummary">
            Accomplished Account Manager with over 6 years experience in managing and solutioning for two $3-5 million accounts. 
            Currently pivoting into a software engineering role where I can leverage my aptitude for learning, problem solving and communication. 
            You can currently find me learning Typescript and AWS, building a React Native app, improvising on stage, or bouldering.
          </p>
        </div>
        <GithubData/>
    </div>
  );
}

