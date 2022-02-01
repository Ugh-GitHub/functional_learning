import React, { useState } from 'react';
// import TechButtons from '../TechButtons/TechButtons';
import './ButtonGrid.css';

export default function ButtonGrid({buttonToggle}) {

    var isMobile = Math.min(window.screen.width, window.screen.height) < 768 || navigator.userAgent.indexOf("Mobi") > -1;

    const [technologies, setTechnologies] = useState(
        [
            {
                name: 'Javascript',
                type: 'language',
                toggle: ''
            },
            {
                name: 'SQL',
                type: 'language',
                toggle: ''
            },
            {
                name: 'HTML',
                type: 'language',
                toggle: ''
            },
            {
                name: 'CSS',
                type: 'language',
                toggle: ''
            },
            {
                name: 'React', 
                type: 'library',
                toggle: ''
            }, 
            {
                name: 'Redux', 
                type: 'library',
                toggle: ''
            },
            // {
            //     name: 'Typescript',
            //     type: 'language',
            //     toggle: ''
            // },
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
            {
                name: 'AJAX',
                type: 'API',
                toggle: ''
            },
            {
                name: 'Material-UI',
                type: 'library',
                toggle: ''
            },
            {
                name: 'React Router',
                type: 'library',
                toggle: ''
            },
            {
                name: 'Passport',
                type: 'Middleware',
                toggle: ''
            },
        ]
    );

    function selectToggle(technology) {
        var index = technologies.map(function(tech) { return tech.name; }).indexOf(technology.name);
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

        <div className={`${isMobile ? "buttonGridMobile" : "buttonGrid"}`}>
            {technologies
            .map((technology, index) => (
                <div> 
                    <button 
                        key={index} 
                        className={`${technology.toggle} ${isMobile ? "buttonMobile" : ""}`} 
                        onClick={() => someFunction(technology)}
                    >
                        {technology.name}
                    </button>
                </div>
            ))}
        </div>

    );
}