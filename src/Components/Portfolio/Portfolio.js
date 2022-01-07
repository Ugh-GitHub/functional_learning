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

  useEffect(() => {
    console.log('use effect ran in Portfolio');
    console.log(tech);
  });

  return (
    <div >
        {/* <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Search by Project Title' aria-label='Search' value={searchParams.get('term') || ''}
        onChange={(event) => {
            let term = event.target.value;
            if (term) {
            setSearchParams({ term }, { replace: true });
            } else {
            setSearchParams({}, { replace: true });
            }
        }}/>  
        </form> */}
        {modalOpen && <Modal setOpenModal={setModalOpen} setProjectData={project}/>}       
        <ButtonGrid buttonToggle={buttonToggle}/>
        <GridLayout childToParent={childToParent} setTechData={tech}/>
    </div>
  );
}
