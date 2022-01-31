import * as React from 'react';
import { Outlet } from 'react-router-dom';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
} from 'mdb-react-ui-kit';
import { useState } from 'react';
import './App.css';


export default function App() {
  const [showBasic, setShowBasic] = useState(false);
  const currentYear = new Date().getFullYear();
  var isMobile = Math.min(window.screen.width, window.screen.height) < 768 || navigator.userAgent.indexOf("Mobi") > -1;

  return (
    <div>
      <div className="page-wrap">
        <MDBNavbar expand='lg' light bgColor='light' className='fixed-top'>
          <MDBContainer fluid>
            <MDBNavbarBrand href='/'>Home</MDBNavbarBrand>
            <MDBNavbarBrand href='/resume'>Resume</MDBNavbarBrand>
            <MDBNavbarBrand href='/portfolio'>Portfolio</MDBNavbarBrand>
            {/* <MDBNavbarBrand href='/interviews'>Interview Recordings</MDBNavbarBrand> */}
            <MDBNavbarToggler
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setShowBasic(!showBasic)}
            >
              <MDBIcon icon='bars' />
            </MDBNavbarToggler>
          </MDBContainer>
        </MDBNavbar>
        <Outlet/>
      </div>
      <footer className={`${isMobile ? "siteFooterMobile" : "siteFooter"}`}>
        Site built using React v17, Material Design Bootstrap, and Apollo Client<br/>
        &#169; Peter Pierce, {currentYear}<br/>
        <a href="https://www.linkedin.com/in/peter-p-2b757737">
          <img 
            src="https://s3.us-east-2.amazonaws.com/portfolio.site.images/LI-In-Bug.png" 
            className={`${isMobile ? "footerIconMobile" : "footerIcon"}`}
            alt="Linkedin Logo"
          />
        </a>
        <a href="https://github.com/Ugh-GitHub">
          <img
            src="https://s3.us-east-2.amazonaws.com/portfolio.site.images/GitHub-Mark-64px.png" 
            className={`${isMobile ? "footerIconMobile" : "footerIcon"}`}
            alt="GitHub Logo"
          />
        </a>
      </footer>
    </div>
  );
}

