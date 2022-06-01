import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUsersRequest,
  deleteUserRequest,
  filterUserRequest,
  sortUserRequest,
} from '../redux/actions';

import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBtn,
  MDBIcon,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtnGroup,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Home = () => {
  const dispatch = useDispatch();
  const { users, error, pageLimit, currentPage, paginationMode } = useSelector(
    (state) => state.data
  );
  const [sortValue, setSortValue] = useState('');

  const sortOption = ['Name', 'Email', 'Phone', 'Address', 'Status'];

  const handleDelete = (id) => {
    dispatch(deleteUserRequest(id));
    toast.success('User deleted');
  };

  useEffect(() => {
    dispatch(getUsersRequest({ start: 0, end: 4, currentPage: 0 }));
  }, [dispatch]);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  useEffect(() => {
    if (sortValue.length === 0) {
      dispatch(getUsersRequest());
      setSortValue('');
      return;
    }

    dispatch(sortUserRequest(sortValue));
  }, [sortValue, dispatch]);

  return (
    <MDBContainer>
      <div className="container" style={{ marginTop: '100px' }}>
        <MDBTable>
          <MDBTableHead dark>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </MDBTableHead>
          {users &&
            users.map((el, index) => (
              <MDBTableBody key={index}>
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{el.name}</td>
                  <td>{el.email}</td>
                  <td>{el.phone}</td>
                  <td>{el.address}</td>
                  <td>{el.status}</td>
                  <td
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <MDBBtn
                      tag="a"
                      color="none"
                      onClick={() => handleDelete(el.id)}
                    >
                      <MDBIcon
                        fas
                        icon="trash"
                        style={{ color: '#dd4b39' }}
                        size="lg"
                      />
                    </MDBBtn>
                    <Link to={`/editUser/${el.id}`}>
                      <MDBIcon
                        fas
                        icon="pen"
                        style={{ color: '#55acee', marginBottom: '10px' }}
                        size="lg"
                      />
                    </Link>
                    <Link to={`/userInfo/${el.id}`}>
                      <MDBIcon
                        fas
                        icon="eye"
                        style={{ color: '#3b5998', marginBottom: '10px' }}
                        size="lg"
                      />
                    </Link>
                  </td>
                </tr>
              </MDBTableBody>
            ))}
        </MDBTable>
      </div>
      <MDBRow>
        <MDBCol size="8">
          <h5>Sort By:</h5>
          <select
            style={{ width: '50%', borderRadius: '2px', height: '35px' }}
            value={sortValue}
            onChange={(e) => setSortValue(e.target.value)}
          >
            <option value="">Select value</option>
            {sortOption.map((el, index) => (
              <option key={index} value={el.toLowerCase()}>
                {el}
              </option>
            ))}
          </select>
        </MDBCol>
        <MDBCol size="4">
          <h5>Filter By Status:</h5>
          <MDBBtnGroup>
            <MDBBtn
              color="success"
              onClick={() => dispatch(filterUserRequest('active'))}
            >
              Active
            </MDBBtn>
            <MDBBtn
              color="danger"
              onClick={() => dispatch(filterUserRequest('inactive'))}
            >
              Inactive
            </MDBBtn>
            <MDBBtn onClick={() => dispatch(getUsersRequest())}>Reset</MDBBtn>
          </MDBBtnGroup>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Home;
