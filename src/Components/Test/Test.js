import * as React from 'react';
import { Accordion } from 'react-bootstrap';
import VidInterviewItem from '../VidInterviewItem/VidInterviewItem';
import './Test.css';
// import { useSearchParams } from 'react-router-dom';


export default function Test() {
  
    return (

        <div>
            <Accordion defaultActiveKey="0" flush>
                <VidInterviewItem/>   
            </Accordion>
        </div>

    );
}