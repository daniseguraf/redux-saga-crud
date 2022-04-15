import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { createUserStart } from './../redux/actions';

const initialState = {
  name: '',
  email: '',
  phone: '',
  address: '',
};

const AddEditUser = () => {
  const [user, setUser] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e, key) => {
    setUser((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUserStart(user));
    setUser(initialState);
    setTimeout(() => navigate('/'), 500);
  };

  return (
    <div className="container" style={{ marginTop: '150px' }}>
      <h2> Add User</h2>

      <form onSubmit={handleSubmit}>
        <MDBInput
          type="text"
          wrapperClass="mb-4"
          label="Name"
          value={user.name}
          onChange={(e) => handleChange(e, 'name')}
        />
        <MDBInput
          wrapperClass="mb-4"
          type="email"
          label="Email"
          value={user.email}
          onChange={(e) => handleChange(e, 'email')}
        />
        <MDBInput
          wrapperClass="mb-4"
          type="tel"
          label="Phone"
          value={user.phone}
          onChange={(e) => handleChange(e, 'phone')}
        />
        <MDBInput
          type="text"
          wrapperClass="mb-4"
          label="Address"
          value={user.address}
          onChange={(e) => handleChange(e, 'address')}
        />

        <MDBBtn className="mb-4" type="submit">
          Create User
        </MDBBtn>
      </form>
    </div>
  );
};

export default AddEditUser;
