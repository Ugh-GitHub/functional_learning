import * as React from 'react';

export default function TechButtons({ technology }) {
    function buttonToggle( tech ) {
        console.log(tech);
    }

    return (

        <div className={`card ${technology.type}`} onClick={() => buttonToggle(technology.name)}>
            <b>{technology.name}</b>
        </div>
    );
}