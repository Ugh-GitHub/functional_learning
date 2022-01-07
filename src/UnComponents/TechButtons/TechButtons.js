import React, { useState } from 'react';

export default function TechButtons({ technology }) {
    

    

    return (

        <div className={`card ${technology.type}`} >
            <span className='noSelect'><b>{technology.name}</b></span>
        </div>
    );
}