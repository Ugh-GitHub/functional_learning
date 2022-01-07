import React, { useState } from 'react';
// import TechButtons from '../TechButtons/TechButtons';
import './ButtonGrid.css';

export default function ButtonGrid({buttonToggle}) {
    
    let technologies = [
        {
            name: 'React', 
            type: 'technology'
        }, 
        {
            name: 'Redux', 
            type: 'technology'
        },
        {
            name: 'SQL',
            type: 'language'
        },
        {
            name: 'Javascript',
            type: 'language'
        },
        {
            name: 'HTML',
            type: 'language'
        },
        {
            name: 'Typescript',
            type: 'language'
        },
    ];

    

    return (

        <div className="buttonGrid">
            {technologies
            .map((technology, index) => (
                    <div key={index}>
                        <div>
                            <button onClick={() => buttonToggle(technology)}>{technology.name}</button>
                        </div>
                    </div>
            ))}
        </div>

    );
}