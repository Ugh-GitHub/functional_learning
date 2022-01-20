import React, { useState } from 'react';
import './ToolTip.css';

const TooltipRight = ({ toolTipType, children, text, ...rest }) => {
    const [show, setShow] = useState(false);
  
    return (
      <div className="tooltip-container">
        <div className={show ? 'tooltip-right-box visible' : 'tooltip-right-box'}>
          {text}
          <span className="tooltip-arrow-right" />
        </div>
        <div
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          {...rest}
        >
          {children}
        </div>
      </div>
    );
  };

  export default TooltipRight;