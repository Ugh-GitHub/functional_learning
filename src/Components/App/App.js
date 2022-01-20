import * as React from 'react';
import { Outlet } from 'react-router-dom';
// import { Outlet, useNavigate } from 'react-router-dom';
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
  // let navigate = useNavigate();
  const [showBasic, setShowBasic] = useState(false);

  return (
    <div>
      <div class="page-wrap">
        <MDBNavbar expand='lg' light bgColor='light' className='fixed-top'>
          <MDBContainer fluid>
            <MDBNavbarBrand href='/'>Home</MDBNavbarBrand>
            <MDBNavbarBrand href='/resume'>Resume</MDBNavbarBrand>
            <MDBNavbarBrand href='/portfolio'>Portfolio</MDBNavbarBrand>
            {/* <MDBNavbarBrand href='/interviews'>Interview Recordings</MDBNavbarBrand> */}
            {/* <MDBNavbarBrand href='/projects'>Current Projects</MDBNavbarBrand> */}
            
            <MDBNavbarToggler
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setShowBasic(!showBasic)}
            >
              <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>

            
          </MDBContainer>
        </MDBNavbar>
        <Outlet/>
      </div>
      <footer class="site-footer">&#169; Peter Pierce, 2022</footer>
    </div>
  );
}

