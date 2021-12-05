import * as React from 'react';
import { Accordion } from 'react-bootstrap';
// import { useSearchParams } from 'react-router-dom';


export default function VidInterviewItem() {
    let AccordionItems = [
        {key: 0, question: "Why should we hire you?", link:'https://www.youtube.com/embed/E7wJTI-1dvQ'},
        {key: 0, question: "What are some other skills we should know about?", link:'https://www.youtube.com/watch?v=LYG7sMtb6u8'}]
  
    return (

        
                <Accordion.Item eventKey="0"> 
                {/* Add in the number here */}
                    <Accordion.Header>Dynamic Header</Accordion.Header> 
                    {/* Add in the Interview question here */}
                    <Accordion.Body>
                        <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                            //Youtube link fed here
                            frameborder='50'
                            allow='autoplay; encrypted-media'
                            allowfullscreen
                            title='video'
                            width="600"
                            height="300"
                        />
                    </Accordion.Body>
                </Accordion.Item>
            

    );
}