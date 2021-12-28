import * as React from 'react';

export default function GridItem({ project }) {
    return (

        <>
            <img></img>
            <h4><b>{project.name}</b></h4>
            <p>{project.due}</p>
            <p>Text goes here</p>
        </>
    );
}