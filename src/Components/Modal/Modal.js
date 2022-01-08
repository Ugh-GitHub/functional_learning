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
        <div className="title">
          <h1>{setProjectData.name}</h1>
        </div>
        <div className="body">
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div>
        <div className="footer">
          <button id="cancelBtn"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            Cancel
          </button>
          <a href={setProjectData.demoLink}>
              <img src="/images/heroku-logo-solid-purple.png" className="logoIcon" alt="Heroku Logo"/>
          </a>
          <a href={setProjectData.github}>
            <img src="/images/GitHub-Mark-64px.png" className="logoIcon" alt="GitHub Logo"/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Modal;