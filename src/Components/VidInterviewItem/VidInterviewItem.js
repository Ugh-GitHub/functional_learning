import * as React from 'react';
import { Accordion } from 'react-bootstrap';
// import { useSearchParams } from 'react-router-dom';


export default function VidInterviewItem() {
    let AccordionItems = [
        {question: "Why should we hire you?", link:'E7wJTI-1dvQ', alt:"'Why should we hire you?'"},
        {question: "What are some other skills we should know about?", link:'LYG7sMtb6u8', alt:""},
        {question: "Tell me about a time you failed. How did you deal with the situation?", link:'Nkx1hWs88Ek', alt:""},
        {question: "Test", link:'gu6cequxkLQ', alt:""}];

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
                                        <iframe
                                            async
                                            loading='lazy'
                                            srcdoc={`<style>*
                                                    {padding:0;margin:0;overflow:hidden}html,
                                                    body{height:100%}img,
                                                    span{position:absolute;
                                                        width:100%;
                                                        top:0;
                                                        bottom:0;
                                                        margin:auto}
                                                    span{height:1.5em;
                                                            text-align:center;
                                                            font:48px/1.5 sans-serif;
                                                            color:white;
                                                            text-shadow:0 0 0.5em black}
                                                </style>
                                                <a href=https://www.youtube.com/embed/${interview.link}>
                                                    <img src=https://img.youtube.com/vi/${interview.link}/hqdefault.jpg alt="${interview.alt} video essay placeholder image"><span>▶</span>
                                                </a>`
                                            }
                                            frameborder='50'
                                            allow='autoplay; encrypted-media'
                                            allowfullscreen
                                            title={`Video response for: ${interview.question}`}
                                            class="responsive-iframe"
                                            id="player"
                                            alt={`Video response for: ${interview.question}`}
                                        />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>))}
                
            </Accordion>
        </>
    );
}