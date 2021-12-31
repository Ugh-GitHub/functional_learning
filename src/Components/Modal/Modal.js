import React, { useEffect, useState } from "react";
import "./Modal.css";

function Modal({ setOpenModal, setProjectData }) {
    const [project, setProject] = useState({
        name: "Calculator",
        technologies: [
          'React',
          'Redux'
        ],
        amount: "$9,500",
        due: "07/22/2003"
    });

    useEffect(() => {
        console.log('use effect ran');
        console.log(setProjectData.technologies);
    });

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
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;