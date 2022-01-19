import * as React from 'react';
import './GithubRow.css';
import Tooltip from '../ToolTip/ToolTip';

export default function GithubRow({week}) {
    return week.map((day) => (
        <Tooltip text={`${day.contributionCount} contributions on ${day.date}`}>
            <div key={day.date} className={`contributionBox ${day.color}`} style={{backgroundColor: `${day.color}`}}>
            </div>
        </Tooltip>
        
    ));
}