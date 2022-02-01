import React, { useState } from 'react';
import GridLayout from '../GridLayout/GridLayout';
import './Portfolio.css';
import ButtonGrid from '../ButtonGrid/ButtonGrid';
import Modal from '../Modal/Modal';

export default function Invoices() {
  const [modalOpen, setModalOpen] = useState(false);
  const [project, setProject] = useState('');
  const [tech, setTech] = useState([]);
  // LOOK HERE GET THAT MOBILE INFO OUT
  var isMobile = Math.min(window.screen.width, window.screen.height) < 768 || navigator.userAgent.indexOf("Mobi") > -1;

  const childToParent = (data) => {
    setProject(data);
    setModalOpen(true);
  }

  function buttonToggle( technology ) {
    if (tech.indexOf(technology.name) > -1 ) {
        setTech(tech.filter(item => item !== technology.name));
    }
    else {
        setTech((tech) => [...tech,technology.name]);
    } 
  }
  if ( isMobile ) {
    return (
      <div>
          {modalOpen && <Modal setOpenModal={setModalOpen} setProjectData={project}/>}
          <p className='buttonGridInstructions'>A small selection of my previous work. Most projects were not developed for mobile and may suffer from poor performance as a result. If you're looking for projects that utilize specific technologies, you can select the buttons below to filter for related projects.</p>       
          <ButtonGrid buttonToggle={buttonToggle}/>
          <GridLayout childToParent={childToParent} setTechData={tech}/>
      </div>
    );
  }
  else {
    return (
      <div>
          {modalOpen && <Modal setOpenModal={setModalOpen} setProjectData={project}/>}
          <p className='buttonGridInstructions'>A small selection of my previous work. If you're looking for projects that utilize specific technologies, you can select the buttons below to filter for related projects.</p>       
          <ButtonGrid buttonToggle={buttonToggle}/>
          <GridLayout childToParent={childToParent} setTechData={tech}/>
      </div>
    );
  }
  
}
