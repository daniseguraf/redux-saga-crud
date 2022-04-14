import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [showBasic, setShowBasic] = useState(false);
  return (
    <MDBNavbar expand="lg" dark bgColor="primary">
      <MDBContainer fluid>
        <MDBNavbarBrand className="text-white">
          <span style={{ marginRight: '10px' }}>
            <MDBIcon fas icon="book-open" />
          </span>
        </MDBNavbarBrand>

        <MDBNavbarToggler
          className="text-white"
          data-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse show={showBasic} navbar>
          <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink className="nav-link">
                <NavLink className="text-white" to="/">
                  Home
                </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink className="nav-link">
                <NavLink className="text-white" to="/addUser">
                  Add User
                </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink className="nav-link">
                <NavLink className="text-white" to="/about">
                  About
                </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Header;
