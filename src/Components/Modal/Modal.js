import React, { useEffect } from "react";
import "./Modal.css";

function Modal({ setOpenModal, setProjectData }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = 'unset';
  }, [])


  return (
    <div>
      <div className="modalBackground">
        <div className="modalContainer">
          <img src={setProjectData.imageLink} className="" alt={setProjectData.altTag}></img>
          <div className="title">
            <h1>{setProjectData.name}</h1>
          </div>
          <div className="body">
            <p>{setProjectData.cardText}</p>
          </div>
          <div className="footer">
            <button id="cancelBtn" onClick={() => {setOpenModal(false);}}>
              Cancel
            </button>
            <button onClick={() => {console.log('Clicked',setProjectData.demoLink)}}>
              Demo Site
            </button>
            <button onClick={() => {console.log('Clicked',setProjectData.github)}}>
              Github Repo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;