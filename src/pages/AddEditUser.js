import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { createUserRequest, updateUserRequest } from './../redux/actions';

const initialState = {
  name: '',
  email: '',
  phone: '',
  address: '',
};

const AddEditUser = () => {
  const [user, setUser] = useState(initialState);
  const [editMode, setEditMode] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users } = useSelector((state) => state.data);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setEditMode(true);
      const singleUser = users.filter((el) => el.id === +id);
      setUser({ ...singleUser[0] });
    } else {
      setEditMode(false);
      setUser(initialState);
    }
  }, [id, users]);

  const handleChange = (e, key) => {
    setUser((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.name && user.email && user.phone && user.address) {
      if (editMode) {
        dispatch(updateUserRequest(user));
        setUser(initialState);
        setTimeout(() => navigate('/'), 500);
        toast.success('User updated successfully');
      } else {
        dispatch(createUserRequest(user));
        setEditMode(false);
        toast.success('User added successfully');
        setTimeout(() => navigate('/'), 500);
      }
    }
  };

  return (
    <div className="container" style={{ marginTop: '100px' }}>
      <h2>{editMode ? 'Update User Detail' : 'Create User'}</h2>

      <form onSubmit={handleSubmit}>
        <MDBInput
          type="text"
          wrapperClass="mb-4"
          label="Name"
          value={user.name || ''}
          onChange={(e) => handleChange(e, 'name')}
        />
        <MDBInput
          wrapperClass="mb-4"
          type="email"
          label="Email"
          value={user.email || ''}
          onChange={(e) => handleChange(e, 'email')}
        />
        <MDBInput
          wrapperClass="mb-4"
          type="tel"
          label="Phone"
          value={user.phone || ''}
          onChange={(e) => handleChange(e, 'phone')}
        />
        <MDBInput
          type="text"
          wrapperClass="mb-4"
          label="Address"
          value={user.address || ''}
          onChange={(e) => handleChange(e, 'address')}
        />

        <MDBBtn className="mb-4" type="submit">
          {editMode ? 'Update' : 'Create'}
        </MDBBtn>
      </form>
    </div>
  );
};

export default AddEditUser;
