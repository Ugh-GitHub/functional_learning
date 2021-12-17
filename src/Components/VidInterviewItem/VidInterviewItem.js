import * as React from 'react';
import { Accordion } from 'react-bootstrap';
// import { useSearchParams } from 'react-router-dom';


export default function VidInterviewItem() {
    let AccordionItems = [
        {question: "Why should we hire you?", link:'E7wJTI-1dvQ'},
        {question: "What are some other skills we should know about?", link:'LYG7sMtb6u8'},
        {question: "Tell me about a time you failed. How did you deal with the situation?", link:'Nkx1hWs88Ek'},
        {question: "Test", link:'gu6cequxkLQ'}];

    return (
        <>
            <h1>Behavioral Questions</h1>
            <span></span>
            <span></span>
            <Accordion flush>
                    {AccordionItems
                        .map((interview, index) => (
                            <Accordion.Item eventKey={index}> 
                                <Accordion.Header>{interview.question}</Accordion.Header> 
                                <Accordion.Body>
                                    <div class="vid-container">
                                        <iframe src={`https://www.youtube.com/embed/${interview.link}`}
                                            async
                                            loading='lazy'
                                            frameborder='50'
                                            allow='autoplay; encrypted-media'
                                            allowfullscreen
                                            title={`Video response for: ${interview.question}`}
                                            class="responsive-iframe"
                                            id="player"
                                        />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>))}
                
            </Accordion>
        </>
    );
}