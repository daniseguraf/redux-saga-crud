import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchUserRequest } from '../redux/actions';

const Header = () => {
  const [showBasic, setShowBasic] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchUserRequest(searchTerm));
    searchTerm('');
  };
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
          <MDBNavbarNav
            className="me-auto mb-2 mb-lg-0"
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <MDBNavbarItem>
              <NavLink className="text-white" to="/">
                Home
              </NavLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <NavLink className="text-white" to="/addUser">
                Add User
              </NavLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <NavLink className="text-white" to="/about">
                About
              </NavLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <form className="d-flex input-group w-auto" onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="Search name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <MDBBtn color="dark" type="submit">
              Search
            </MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Header;
