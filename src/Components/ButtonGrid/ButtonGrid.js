import * as React from 'react';
import { useSearchParams } from 'react-router-dom';
import TechButtons from '../TechButtons/TechButtons';
import './ButtonGrid.css';

export default function ButtonGrid() {
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
                        <div class="">
                            <TechButtons technology={technology}/>
                        </div>
                    </div>
            ))}
        </div>

    );
}