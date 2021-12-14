import * as React from 'react';
import { Outlet } from 'react-router-dom';
// import { Outlet, useNavigate } from 'react-router-dom';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  // MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { useState } from 'react';

export default function App() {
  // let navigate = useNavigate();
  const [showBasic, setShowBasic] = useState(false);

  return (
    <div>
      <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>Home</MDBNavbarBrand>
          <MDBNavbarBrand href='/resume'>Resume</MDBNavbarBrand>
          <MDBNavbarBrand href='/invoices'>Portfolio</MDBNavbarBrand>
          <MDBNavbarBrand href='/test'>Interview Recordings</MDBNavbarBrand>
          <MDBNavbarBrand href='/projects'>Current Projects</MDBNavbarBrand>
          
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
      <Outlet />
    </div>
  );
}

