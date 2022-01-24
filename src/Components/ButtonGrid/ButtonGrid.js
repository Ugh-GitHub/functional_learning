import React, { useState } from 'react';
// import TechButtons from '../TechButtons/TechButtons';
import './ButtonGrid.css';

export default function ButtonGrid({buttonToggle}) {
    const [technologies, setTechnologies] = useState([{
        name: 'React', 
        type: 'library',
        toggle: ''
    }, 
    {
        name: 'Redux', 
        type: 'library',
        toggle: ''
    },
    {
        name: 'SQL',
        type: 'language',
        toggle: ''
    },
    {
        name: 'Javascript',
        type: 'language',
        toggle: ''
    },
    {
        name: 'HTML',
        type: 'language',
        toggle: ''
    },
    {
        name: 'Typescript',
        type: 'language',
        toggle: ''
    },
    {
        name: 'jQuery',
        type: 'library',
        toggle: ''
    },
    {
        name: 'Node.js',
        type: 'library',
        toggle: ''
    },
    {
        name: 'Express.js',
        type: 'library',
        toggle: ''
    },
    {
        name: 'PostgreSQL',
        type: 'database',
        toggle: ''
    },
]);

    function selectToggle(technology) {
        var index = technologies.map(function(e) { return e.name; }).indexOf(technology.name);
        if (technologies[index].toggle === '') {
            technologies[index].toggle = 'toggled';
        }
        else {
            technologies[index].toggle = '';
        }
    }
    
    function someFunction(technology) {
        selectToggle(technology);
        buttonToggle(technology);
    }

    return (

        <div className="buttonGrid">
            {technologies
            .map((technology, index) => (
                    <div key={index}>
                        <div>
                            <button className={technology.toggle} onClick={() => someFunction(technology)}>{technology.name}</button>
                        </div>
                    </div>
            ))}
        </div>

    );
}