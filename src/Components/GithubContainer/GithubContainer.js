import * as React from 'react';
import GithubData from '../GithubData/GithubData';
import './GithubContainer.css';

export default function GithubContainer() {
    return (
        <div className="contributionsContainer">
            <GithubData/>
        </div>
    );
}