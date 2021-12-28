import * as React from 'react';
import './Resume.css';

export default function Resume() {
  
    return (
        <div className="resumeFormat">
            <div className="sectionDivides">
                <span>Peter Pierce <br/></span>
                <span>(952) 491 - 0151 <br/></span>
                <a href="https://www.linkedin.com/in/peter-p-2b757737">
                    <img src="/images/LI-In-Bug.png" className="logoIcon" ></img>
                </a>
                <a href="https://github.com/Ugh-GitHub">
                    <img src="/images/GitHub-Mark-64px.png" className="logoIcon" ></img>
                </a>
            </div>
            
            
            
            <div className="sectionDivides">
                <h1 className="resumeHeader">Experience</h1>
                <span className="resumeDate">February 2021 - April 2021</span>
                <h2 className="expTitle">Westwood Professional Services, Minnetonka, MN - Contract Technical Business Analyst</h2>
                <span className="jobSummary">Westwood is a multi-disciplined national surveying and engineering services provider for commercial and residential development, public infrastructure, wind energy, solar energy, energy storage, and electric transmission projects.</span>
                <ul>
                    <li>Assisted in implementation of Contract Management System and developing a training tool/process flow diagram for UAT.</li>
                    <li>Drove delivery of Learning Management System mobile app.</li>
                    <li>Translated the user requirements to system requirements and assisted in the vendor selection process for the Applicant Tracking System.</li>
                </ul>
                
                <span className="resumeDate">January 2015 - December 2020</span>
                <h2 className="expTitle">Lyle Signs, Eden Prairie, MN - Account Manager</h2>
                <span className="jobSummary">Lyle Signs was a 8-figure revenue 100+ year old company and one of the industry leaders of signage and labelling solutions in the parking, traffic, and industrial safety markets.</span>
                <ul>
                    <li>Grew the Amazon account from the $1,000’s to $4 million/yr.</li>
                    <li>Grew the W.W. Grainger account from under $1 million/yr. (2013) to nearly $4 million/yr while increasing profitability, acquiring market share and eliminating a major competitor.</li>
                    <li>Created the company’s first digital product catalog from nothing to nearly 30,000 SKUs.</li>
                    <li>Designed and implemented process improvements that automated the company’s new product creation process, bringing competitive parity to our safety sign catalog and reducing required hours for over 16,000 SKUs down from &gt;4,500 to under 300.</li>
                    <li>Developed and coordinated implementation of new packaging for the decal product line without increasing scrap rate, eliminating labelling requirements and saving time and money.</li>
                    <li>Coordinated on-site and off-site with Amazon & W. W. Grainger accounts for marketing, negotiations, SaaS development, and to resolve logistics and operational issues.</li>
                    <li>Manage product catalog uploads, keywords, & metadata for Amazon.com & W. W. Grainger accounts.</li>
                    <li>Develop products and new product proposals.</li>
                    <li>Managed marketing, PPC, keyword research, and Amazon advertising console/AMS of Amazon.com business.</li>
                </ul>
                <span className="resumeDate">April 2013 - December 2014</span>
                <h2 className="expTitle">Lyle Signs, Eden Prairie, MN - Assistant Account Manager</h2>
                <ul>
                    <li>Trained in on company production systems and operations</li>
                    <li>Assisted in sales operations, catalog setups, and created presentation materials.</li>
                </ul>
                <span className="resumeDate">July 2012 - March 2013</span>
                <h2 className="expTitle">RAW Logistics, Edina, MN - Logistics Coordinator</h2>
                <span className="jobSummary">Operated a phone desk and freight tracking system for 50 hours/week.</span>
                <ul>
                    <li>Negotiated, brokered, and coordinated shipments with asset-based carriers.</li>
                </ul>
            </div>
            
            <div className="sectionDivides">
                <h1 className="resumeHeader">Skills</h1>
                <span>PERN (PostgreSQL, Express, React, and Node.js) Stack, React Native, GitHub, Javascript, SQL, HTML, Python, Axios, Ajax, Agile, Scrum, Microsoft Excel (Power User), Azure DevOps, Atlassian Trello, Xcode, Amazon Vendor Ecosystem (SEO, PPC, etc.).</span>
            </div>

            <div className="sectionDivides">
                <h1 className="resumeHeader">Education</h1>
                <span className="resumeDate">October 2020 - January 2021</span>
                <h2 className="expTitle">PRIME Digital Academy, Minneapolis, MN - Full Stack Software Engineering</h2>
                <span className="jobSummary">20-week remote intensive program learning the essentials of web app development and the Agile software development life cycle.</span>
                <ul>
                    <li>Developed a labor/project management SaaS as a client project, bringing project management & software development best practices and technical expertise to drive scoping, development & overall productivity.</li>
                    <li>Developed a working concept model of a database-orientated custom artwork design engine for Lyle Signs as part of a pitch to improve on existing pre-press operations.</li>
                    <li>Methodologies introduced and utilized: Agile software development cycle, scoping, database architecture and design, testing, debugging, and software project management.</li>
                    <li>Technologies worked with: SQL | HTML | CSS | Jquery | Javascript | Python | React | Redux | Passport | Express | PostgreSQL | Node.js | SQL | Git/GitHub | Postico | Postman</li>
                </ul>
                
                <span className="resumeDate">August 2008 - May 2012</span>
                <h2 className="expTitle">Colgate University, Hamilton, NY - Bachelor of Arts Double Major in Economics and Geography</h2>
            </div>
            
            <div className="sectionDivides">
                <h1 className="resumeHeader">Volunteering</h1>
                <span className="resumeDate">June 2021 - Present</span>
                <h2>Open Arms of MN - Kitchen & Bakery Volunteer</h2>
                <span className="jobSummary">Volunteering 1.5-2 hours per day weekly (and sometimes Saturday). Open Arms of MN strives to provide medically tailored meals for people experiencing a significant illness or health crisis. </span>
            </div>
        </div>
    );
}

