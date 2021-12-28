import * as React from 'react';

export default function TechButtons({ technology }) {
    return (

        <a className={`card ${technology.type}`}>
            <b>{technology.name}</b>
        </a>
    );
}