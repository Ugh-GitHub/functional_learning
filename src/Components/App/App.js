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
      <footer className="site-footer">&#169; Peter Pierce, {currentYear}</footer>
    </div>
  );
}

