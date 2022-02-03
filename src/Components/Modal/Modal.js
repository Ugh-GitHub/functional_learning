import React, { useEffect } from "react";
import "./Modal.css";

function Modal({ setOpenModal, setProjectData }) {

  var isMobile = Math.min(window.screen.width, window.screen.height) < 768 || navigator.userAgent.indexOf("Mobi") > -1;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = 'unset';
  }, [])

  return (
    <div>
      <div className="modalBackground">
        <div className={`${isMobile ? "modalContainerMobile" : "modalContainer"}`}>
          <img src={setProjectData.modalImageLink} className={`${isMobile ? "modalImgMobile" : ""}`} alt={setProjectData.altTag}></img>
          <div className="title">
            <h1>{setProjectData.name}</h1>
          </div>
          <div className="body">
            <p>{setProjectData.cardText}</p>
          </div>
          <div className="footer">
            <button onClick={() => {window.location.href=setProjectData.demoLink}} 
              disabled={isMobile} 
              id={`${isMobile ? "disabledButton" : ""}`}
            >
              Demo Site
            </button>
            <button onClick={() => {window.location.href=setProjectData.github}}>
              Github Repo
            </button>
            <button id="cancelBtn" onClick={() => {setOpenModal(false);}}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;