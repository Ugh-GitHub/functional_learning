import React from "react";
import "./Modal.css";

function Modal({ setOpenModal, setProjectData }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <img src={setProjectData.imageLink} className="" alt={setProjectData.altTag}></img>
        <div className="title">
          <h1>{setProjectData.name}</h1>
        </div>
        <div className="body">
          <p>{setProjectData.cardText}</p>
        </div>
        <div className="footer">
          <button id="cancelBtn"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              console.log('Clicked',setProjectData.demoLink) ;
            }}
          >
            Demo Site
          </button>
          <button
            onClick={() => {
              console.log('Clicked',setProjectData.github) ;
            }}
          >
            Github Repo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;