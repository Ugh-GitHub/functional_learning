import React, { useState } from 'react';
import './GridLayout';
import GridItem from '../GridItem/GridItem';

export default function GridLayout({ childToParent, setTechData }) {
    let projects = [
        {
          name: "I Have a Project",
          technologies: [
              'React',
              'Redux',
              'SQL',
              'Javascript',
          ],
          github: "https://github.com/Ugh-GitHub/i-have-a-project",
          demoLink: "https://www.youtube.com/watch?v=658-OlkiTCQ&ab_channel=MadTofu22",
          linkType: "youtube",
          imageLink: "/images/IHAP_CreateProject.png",
          altTag: "I Have a Project Sample Image",
        },
        {
          name: "Sign Designer",
          technologies: [
            'React',
            'Redux',
            'SQL',
            'Javascript',
        ],
          github: "https://github.com/Ugh-GitHub/sign_designer",
          demoLink: "https://agile-atoll-25766.herokuapp.com/#/login",
          linkType: "heroku",
          imageLink: "/images/SignDesigner.png",
          altTag: "Sign Designer Sample Image",
        },
        // {
        //   name: "Calculator",
        //   technologies: [
        //     'React',
        //     'Redux'
        // ],
        //   github: "https://github.com/Ugh-GitHub/jquery-server-side-calculator",
        //   heroku: "07/22/2003"
        // },
        {
          name: "Feedback Loop",
          technologies: [
            'React',
            'Redux',
            'SQL',
            'Javascript',
        ],
          github: "https://github.com/Ugh-GitHub/redux-feedback-looper",
          demoLink: "https://secure-anchorage-94469.herokuapp.com/#/",
          linkType: "heroku",
          imageLink: "/images/IHAP_Availability.png",
          altTag: "Feedback Loop Sample Image",
        },
        {
          name: "To-Do App",
          technologies: [
              'React',
              'Redux',
              'SQL',
              'Javascript',
          ],
          github: "https://github.com/Ugh-GitHub/The-Weekend-sql-to-do-list",
          demoLink: "https://pure-chamber-61508.herokuapp.com/",
          linkType: "heroku",
          imageLink: "/images/IHAP_ProjectDetails.png",
          altTag: "To-Do App Sample Image",
        }
      ];
  
    return (
        
        <div className="cards">
            {projects
            .filter((projects) => {
              let techs = setTechData;
              if (techs.length === 0) {
                 return true;
              }
              else {
                let intersection = projects.technologies.filter(x => techs.includes(x));
                if(intersection.length === techs.length) {
                  return true;
                }
                else {
                  return false;
                }
              }
            })
            .map((project, index) => (
                    <div className="card" key={index}>
                        <div className="container" onClick={() => {
                            childToParent(project);
                        }}>
                            <GridItem project={project}/>
                        </div>
                    </div>
            ))}
        </div>

    );
}