import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsersStart, deleteUserStart } from '../redux/actions';

import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBtn,
  MDBIcon,
  MDBSpinner,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Home = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.data);

  const handleDelete = (id) => {
    dispatch(deleteUserStart(id));
    toast.success('User deleted');
  };

  useEffect(() => {
    dispatch(loadUsersStart());
  }, []);

  return (
    <div className="container" style={{ marginTop: '150px' }}>
      <MDBTable>
        <MDBTableHead dark>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
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
  );
};

export default Home;
