import React, { useState } from 'react';
import TechButtons from '../TechButtons/TechButtons';
import './ButtonGrid.css';

export default function ButtonGrid() {
    const [tech, setTech] = useState([]);
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

    function buttonToggle( technology ) {
        if (tech.indexOf(technology.name) > -1 ) {
            setTech(tech.filter(item => item !== technology.name));
        }
        else {
            setTech((tech) => [...tech,technology.name]);
        }
    }

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