import * as React from 'react';
import { Accordion } from 'react-bootstrap';
// import { useSearchParams } from 'react-router-dom';


export default function VidInterviewItem() {
    let AccordionItems = [
        {question: "Why should we hire you?", link:'E7wJTI-1dvQ'},
        {question: "What are some other skills we should know about?", link:'LYG7sMtb6u8'}];
    let baseURL = 'https://www.youtube.com/embed/';

    return (

        <Accordion flush>
                {AccordionItems
                    .map((interview, index) => (
                        <Accordion.Item eventKey={index}> 
                            <Accordion.Header>{interview.question}</Accordion.Header> 
                            <Accordion.Body>
                                <iframe src={`https://www.youtube.com/embed/${interview.link}`}
                                    frameborder='50'
                                    allow='autoplay; encrypted-media'
                                    allowfullscreen
                                    title='video'
                                    width="600"
                                    height="300"
                                />
                            </Accordion.Body>
                        </Accordion.Item>))}
            
        </Accordion>
    );
}