import * as React from 'react';
import './GithubRow.css';
import Tooltip from '../ToolTip/ToolTip';
import TooltipRight from '../ToolTip/ToolTipRight';

export default function GithubRow({week, weekIndex}) {
    var isMobile = Math.min(window.screen.width, window.screen.height) < 768 || navigator.userAgent.indexOf("Mobi") > -1;
    let githubHalfwayPoint = 26;
    if (isMobile) {
        githubHalfwayPoint = 6;
    }
    if(weekIndex < githubHalfwayPoint) {
        return week.map((day) => (
            <Tooltip 
                text={`${day.contributionCount} contributions on ${day.date}`} 
                key={day.date}
            >
                <div 
                    key={day.date} 
                    className={`contributionBox ${day.color}`} 
                    style={{backgroundColor: `${day.color}`}}
                />
            </Tooltip>
        ));
    }
    else {
        return week.map((day) => (
            <TooltipRight 
                text={`${day.contributionCount} contributions on ${day.date}`} 
                key={day.date}
            >
                <div 
                    key={day.date} 
                    className={`contributionBox ${day.color}`} 
                    style={{backgroundColor: `${day.color}`}}
                />
            </TooltipRight>
        ));
    }        
}