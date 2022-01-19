import * as React from 'react';

export default function GridItem({ project }) {
    return (

        <>
            <img src={project.imageLink} className="PortfolioCardImage" alt={project.altTag}></img>
            <h4><b>{project.name}</b></h4>
            <p>{project.due}</p>
            <p>{project.cardText}</p>
        </>
    );
}

