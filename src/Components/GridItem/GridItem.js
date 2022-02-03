import * as React from 'react';

export default function GridItem({ project }) {
    return (

        <>
            <img src={project.imageLink} className="PortfolioCardImage" alt={project.altTag}></img>
            <h4 className='portfolioCardBodyTitle'><b>{project.name}</b></h4>
            {/* <p>{project.due}</p> */}
            <p className='portfolioCardBodyText'>{project.cardText}</p>
        </>
    );
}

