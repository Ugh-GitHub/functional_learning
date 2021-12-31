import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './GridLayout';
import GridItem from '../GridItem/GridItem';

export default function GridLayout({childToParent}) {
    let projects = [
        {
          name: "I Have a Project",
          technologies: [
            //   'React',
            //   'Redux'
          ],
          github: "https://github.com/Ugh-GitHub/i-have-a-project",
          due: "12/05/1995"
        },
        {
          name: "Sign Designer",
          technologies: [
            'React',
            // 'Redux'
        ],
          github: "https://github.com/Ugh-GitHub/sign_designer",
          due: "10/31/2000"
        },
        {
          name: "Calculator",
          technologies: [
            'React',
            'Redux'
        ],
          github: "https://github.com/Ugh-GitHub/jquery-server-side-calculator",
          due: "07/22/2003"
        },
        {
          name: "Feedback Loop",
          technologies: [
            'React',
            'Redux'
        ],
          github: "https://github.com/Ugh-GitHub/redux-feedback-looper",
          due: "09/01/1997"
        },
        {
          name: "To-Do App",
          technologies: [
              'React',
              'Redux'
          ],
          github: "https://github.com/Ugh-GitHub/The-Weekend-sql-to-do-list",
          due: "01/27/2998"
        }
      ];

    let [searchParams, setSearchParams] = useSearchParams({ replace: true });
  
    return (
        
        <div className="cards">
            {projects
            // .filter((projects) => {
            //     let term = searchParams.get('term');
            //     if (!term) {
            //         return true;
            //     }
            //     else {
            //         let name = projects.name.toLowerCase();
            //         return name.startsWith(term.toLowerCase());
            //     } 
            // })
            
            // REPLACE THIS WITH ARRAY COMPARISON

            .filter((projects) => {
                let term = searchParams.get('term');
                // If clause for if there are no toggles selected
                if (!term) {
                    return true;
                }
                else {
                    let name = projects.name.toLowerCase();
                    return name.startsWith(term.toLowerCase());
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