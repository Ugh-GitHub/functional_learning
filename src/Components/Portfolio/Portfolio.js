import React, { useEffect, useState } from 'react';
// import {
//   useSearchParams,
// } from 'react-router-dom';
import GridLayout from '../GridLayout/GridLayout';
import './Portfolio.css';
import ButtonGrid from '../ButtonGrid/ButtonGrid';
import Modal from '../Modal/Modal';

export default function Invoices() {
  // let [searchParams, setSearchParams] = useSearchParams({ replace: true });
  const [modalOpen, setModalOpen] = useState(false);
  const [project, setProject] = useState('');
  const [tech, setTech] = useState([]);

  const childToParent = (data) => {
    // alert("this is an alert");
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

  

  return (
    <div className={setModalOpen ? "scrollLock" : ""}>
        {modalOpen && <Modal setOpenModal={setModalOpen} setProjectData={project}/>}
        <p>If looking for projects that utilize specific technologies, you can select the buttons below to filter for related projects</p>       
        <ButtonGrid buttonToggle={buttonToggle}/>
        <GridLayout childToParent={childToParent} setTechData={tech}/>
    </div>
  );
}
