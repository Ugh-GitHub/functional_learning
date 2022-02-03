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
          <p className='buttonGridInstructions'>A small selection of my previous work. You can filter these projects by technology with the buttons below.
          <br/>Deployed demo links have been disabled by default on mobile. Demo sites are still accessible on desktop</p>       
          <ButtonGrid buttonToggle={buttonToggle}/>
          <GridLayout childToParent={childToParent} setTechData={tech}/>
      </div>
    );
  }
  else {
    return (
      <div>
          {modalOpen && <Modal setOpenModal={setModalOpen} setProjectData={project}/>}
          <p className='buttonGridInstructions'>A small selection of my previous work. You can filter these projects by technology with the buttons below.</p>       
          <ButtonGrid buttonToggle={buttonToggle}/>
          <GridLayout childToParent={childToParent} setTechData={tech}/>
      </div>
    );
  }
  
}
