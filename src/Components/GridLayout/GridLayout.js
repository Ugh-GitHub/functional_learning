import * as React from 'react';
import { useSearchParams } from 'react-router-dom';
import './GridLayout';
import GridItem from '../GridItem/GridItem';

export default function GridLayout() {
    let projects = [
        {
          name: "I Have a Project",
          technologies: [
              'React',
              'Redux'
          ],
          amount: "$10,800",
          due: "12/05/1995"
        },
        {
          name: "Sign Maker",
          technologies: [
            'React',
            'Redux'
        ],
          amount: "$8,000",
          due: "10/31/2000"
        },
        {
          name: "Calculator",
          technologies: [
            'React',
            'Redux'
        ],
          amount: "$9,500",
          due: "07/22/2003"
        },
        {
          name: "Feedback Loop",
          technologies: [
            'React',
            'Redux'
        ],
          amount: "$14,000",
          due: "09/01/1997"
        },
        {
          name: "To-Do App",
          technologies: [
              'React',
              'Redux'
          ],
          amount: "$4,600",
          due: "01/27/2998"
        }
      ];
    let [searchParams, setSearchParams] = useSearchParams({ replace: true });
  
    return (

        <div className="cards">
            {projects
            .filter((projects) => {
                let filter = searchParams.get('filter');
                if (!filter) return true;
                let name = projects.name.toLowerCase();
                return name.startsWith(filter.toLowerCase());
            })
            .map((project, index) => (
                    <div class="card" key={index}>
                        <div class="container">
                            <GridItem project={project}/>
                        </div>
                    </div>
            ))}
        </div>

    );
}