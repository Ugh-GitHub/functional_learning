import * as React from 'react';
import './GithubRow.css'

export default function GithubRow({week}) {
    return week.map((day) => (
        <div key={day.date} className={`contributionBox ${day.color}`} style={{backgroundColor: `${day.color}`}}>
        </div>
    ));
}