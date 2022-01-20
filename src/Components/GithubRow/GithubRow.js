import * as React from 'react';
import './GithubRow.css';
import Tooltip from '../ToolTip/ToolTip';
import TooltipRight from '../ToolTip/ToolTipRight';

export default function GithubRow({week, weekIndex}) {
    if(weekIndex < 25) {
        return week.map((day) => (
            // insert conditional rendering for Tooltip based on what the weekIndex is (i.e. if weekIndex is <25, skews to the left)
            <Tooltip text={`${day.contributionCount} contributions on ${day.date}`} key={day.date}>
                <div key={day.date} className={`contributionBox ${day.color}`} style={{backgroundColor: `${day.color}`}}>
                </div>
            </Tooltip>
            
        ));
    }
    return week.map((day) => (
        // insert conditional rendering for Tooltip based on what the weekIndex is (i.e. if weekIndex is <25, skews to the left)
        <TooltipRight text={`${day.contributionCount} contributions on ${day.date}`} key={day.date}>
            <div key={day.date} className={`contributionBox ${day.color}`} style={{backgroundColor: `${day.color}`}}>
            </div>
        </TooltipRight>
    ));
}