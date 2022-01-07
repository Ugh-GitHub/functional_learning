import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './GridLayout';
import GridItem from '../GridItem/GridItem';

export default function GridLayout({childToParent}) {
    var assert = require('assert');
    let projects = [
        {
          name: "I Have a Project",
          technologies: [
            //   'React',
            //   'Redux'
          ],
          github: "https://github.com/Ugh-GitHub/i-have-a-project",
          heroku: "12/05/1995"
        },
        {
          name: "Sign Designer",
          technologies: [
            'React',
            // 'Redux'
        ],
          github: "https://github.com/Ugh-GitHub/sign_designer",
          heroku: "https://agile-atoll-25766.herokuapp.com/#/home"
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
            'Redux'
        ],
          github: "https://github.com/Ugh-GitHub/redux-feedback-looper",
          heroku: "https://secure-anchorage-94469.herokuapp.com/#/"
        },
        {
          name: "To-Do App",
          technologies: [
              'React',
              'Redux'
          ],
          github: "https://github.com/Ugh-GitHub/The-Weekend-sql-to-do-list",
          heroku: "https://pure-chamber-61508.herokuapp.com/"
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
              // let techs = set of buttons toggled on in an array;
              // if (techs is empty) {
              //    return true;
              // }
              // else {
                // const intersection = new Set(
                //   Array.from(techs).filter(x => projects.technologies.has(x))
                // );
                
                // assert.deepEqual(
                //   Array.from(intersection), techs
                // );
              // }
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